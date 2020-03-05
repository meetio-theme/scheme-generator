export default [
    {
        name: 'META - The complete contents of data structures',
        scope: [
            'meta.class',
            'meta.struct',
            'meta.enum',
            'meta.union',
            'meta.trait',
            'meta.interface',
            'meta.impl',
            'meta.type',
        ],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'META - The entire scope of a function',
        scope: [
            'meta.function',
            'meta.function.parameters',
            'meta.function.return-type',
        ],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'META - The entirety of a namespace',
        scope: [
            'meta.namespace',
        ],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'META - Preprocessor statements in language such as C',
        scope: [
            'meta.preprocessor',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
];
