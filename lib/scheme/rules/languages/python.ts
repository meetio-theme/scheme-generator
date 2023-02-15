import { Rules } from "../../../interfaces";

export default [
    {
        name: 'PYTHON - Keyword declaration function',
        scope: ['source.python keyword.declaration.function.python'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'PYTHON - Function magic',
        scope: ['source.python support.function.magic.python'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'PYTHON - Function',
        scope: ['source.python meta.function.python', 'source.python meta.qualified-name.python support.type.python'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'PYTHON - Qualified name',
        scope: ['source.python meta.qualified-name.python'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: 'PYTHON - Generic name',
        scope: ['source.python variable.function.python meta.generic-name.python'],
        settings: {
            foreground: 'var(blue)',
        },
    },
] as Rules[];
