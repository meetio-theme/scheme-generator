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
        scope: ['meta.namespace'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'META - Preprocessor statements in language such as C',
        scope: ['meta.preprocessor'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name:
            'META - Annotations, attributes and decorator statements that are used to modify the behavior or implementation of a class, method or function',
        scope: [
            'meta.annotation',
            'meta.annotation.identifier',
            'meta.annotation.parameters',
            'punctuation.definition.annotation',
        ],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        name: 'META - Complete identifiers, including namespace names',
        scope: ['meta.path'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name:
            'META - Function names, including the full path, and all parameters',
        scope: ['meta.function-call'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'META - Sections of code delineated by curly braces',
        scope: [
            'meta.block',
            'punctuation.section.block.begin',
            'punctuation.section.block.end',
            'meta.braces',
            'punctuation.section.braces.begin',
            'punctuation.section.braces.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'META - Sections of code delineated by parentheses',
        scope: [
            'meta.group',
            'punctuation.section.group.begin',
            'punctuation.section.group.end',
            'meta.parens',
            'punctuation.section.parens.begin',
            'punctuation.section.parens.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'META - Sections of code delineated by square brackets',
        scope: [
            'meta.brackets',
            'punctuation.section.brackets.begin',
            'punctuation.section.brackets.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'META - Generic data type constructs',
        scope: [
            'meta.generic',
            'punctuation.definition.generic.begin',
            'punctuation.definition.generic.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name:
            'META - HTML and XML tags, including punctuation, names and attributes',
        scope: ['meta.tag'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: 'META - Paragraphs in markup',
        scope: ['meta.paragraph'],
        settings: {
            foreground: 'var(orange)',
        },
    },
];
