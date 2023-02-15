import { Rules } from '../../../interfaces';

export default [
    {
        name: 'JS - Console, "console"',
        scope: ['support.type.object.console', 'support.class.console'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'JS - Console, "log"',
        scope: ['support.function.console'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'JS - Other property',
        scope: ['source.js variable.other.property.js'],
        settings: {
            foreground: 'var(blue)',
        },
    },
] as Rules[];
