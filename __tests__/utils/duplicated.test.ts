import { duplicated } from '../../lib/utils';

describe('duplicated function', () => {
    let originalConsoleLog: typeof console.log;

    beforeEach(() => {
        // Store the original console.log function to restore it after each test
        originalConsoleLog = console.log;
        // Mock the console.log function to prevent actual log outputs during tests
        console.log = jest.fn();
    });

    afterEach(() => {
        // Restore the original console.log function after each test
        console.log = originalConsoleLog;
    });

    it('should detect duplicated scopes', () => {
        const rules = [
            { name: 'Rule 1', scope: ['scope1', 'scope2'], settings: {} },
            { name: 'Rule 2', scope: ['scope2', 'scope3'], settings: {} },
        ];

        const result = duplicated(rules);

        // Ensure the returned result is correct
        expect(result).toEqual([
            { name: 'Rule 1', scope: 'scope1,scope2' },
            { name: 'Rule 2', scope: 'scope2,scope3' },
        ]);
    });

    it('should handle non-duplicated scopes correctly', () => {
        const rules = [
            { name: 'Rule 1', scope: ['scope1', 'scope2'], settings: {} },
            { name: 'Rule 2', scope: ['scope3'], settings: {} },
        ];

        const result = duplicated(rules);

        // Ensure console.log was not called since there are no duplicates
        expect(console.log).not.toHaveBeenCalled();

        // Ensure the returned result is correct
        expect(result).toEqual([
            { name: 'Rule 1', scope: 'scope1,scope2' },
            { name: 'Rule 2', scope: 'scope3' },
        ]);
    });
});
