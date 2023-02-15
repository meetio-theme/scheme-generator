import { Rules } from '../../../interfaces';

export default [
    {
        name: 'SUPPORT - Elements provided by a base frameworks',
        scope: ['support.constant', 'support.function', 'support.module'],
        settings: {
            foreground: 'var(pink)',
        },
    },
    {
        name:
            'SUPPORT - While also used for base frameworks, many syntaxes apply these to scopes unrecognized classes and types, effectively scoping all user constructs.',
        scope: ['support.type', 'support.class', 'support.variable.property'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: 'SUPPORT - Class Component',
        scope: ['support.class.component'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'SUPPORT - Type Primitive',
        scope: ['support.type.primitive'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
] as Rules[];
