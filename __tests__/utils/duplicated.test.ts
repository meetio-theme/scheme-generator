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

    it('should convert scopes', () => {
        const rules = [
            { name: 'Rule 1', scope: ['scope1', 'scope2'], settings: {} },
            { name: 'Rule 2', scope: ['scope3'], settings: {} },
        ];

        const result = duplicated(rules);

        expect(result).toEqual([
            {
                name: 'Rule 1',
                scope: 'scope1,scope2',
                settings: {},
            },
            {
                name: 'Rule 2',
                scope: 'scope3',
                settings: {},
            },
        ]);
    });
});
