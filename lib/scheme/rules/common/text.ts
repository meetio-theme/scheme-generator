import { Rules } from '../../../types';

export default [
    {
        name: 'TEXT - HTML',
        scope: ['text.html'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: 'TEXT - XML',
        scope: ['text.xml'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
] as Rules[];
