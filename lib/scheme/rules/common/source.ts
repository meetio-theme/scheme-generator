import { Rules } from '../../../interfaces';

export default [
    {
        name: 'SOURCE - A language-specific variant of the following scope is typically applied to the entirety of a source code file',
        scope: ['source'],
        settings: {
            foreground: 'var(green)',
        },
    },
] as Rules[];
