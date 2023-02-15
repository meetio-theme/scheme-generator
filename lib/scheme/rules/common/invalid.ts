import { Rules } from '../../../interfaces';

export default [
    {
        name: 'INVALID - Elements that are illegal in a specific context',
        scope: ['invalid.illegal'],
        settings: {
            foreground: 'var(invalid)',
        },
    },
    {
        name: 'INVALID - Deprecated elements',
        scope: ['invalid.deprecated'],
        settings: {
            foreground: 'var(deprecated)',
        },
    },
] as Rules[];
