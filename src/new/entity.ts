export default [
    {
        name: 'The names of data structures',
        scope: [
            'entity.name.class',
            'entity.name.struct',
            'entity.name.enum',
            'entity.name.union',
            'entity.name.trait',
            'entity.name.interface',
            'entity.name.impl',
            'entity.name.type',
        ],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name:
            'Forward-decl variants of the above are used in languages such as C and C++.',
        scope: ['entity.name.class.forward-decl'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name:
            'Class, interface and trait names listed as an inherited class or implemented interface/trait',
        scope: ['entity.other.inherited-class'],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        name: 'Function names receive one of the following scopes',
        scope: [
            'entity.name.function',
            'entity.name.function.constructor',
            'entity.name.function.destructor',
        ],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'Namespaces, packages and modules use the following scope',
        scope: ['entity.name.namespace'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'This scope is often included in the symbol list and index',
        scope: ['entity.name.constant'],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        name: 'Labels for goto-like constructs',
        scope: ['entity.name.label'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'Heading names in markup languages, such as Markdown and Textile',
        scope: ['entity.name.section'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'HTML and XML tags',
        scope: ['entity.name.tag'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: 'HTML, CSS and XML',
        scope: ['entity.other.attribute-name'],
        settings: {
            foreground: 'var(purple)',
        },
    },
];
