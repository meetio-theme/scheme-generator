export default [
    {
        name: 'PUNCTUATION - Separators such as commas',
        scope: ['punctuation.separator'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Semicolons or other statement terminators',
        scope: ['punctuation.terminator'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Parameters eg: ()',
        scope: [
            'punctuation.definition.parameters.begin',
            'punctuation.definition.parameters.end',
            'punctuation.definition.block',
            'punctuation.definition.metadata.begin',
            'punctuation.definition.metadata.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Embedded eg: {}',
        scope: [
            'punctuation.section.embedded.begin',
            'punctuation.section.embedded.end',
            'meta.interpolation punctuation.section.interpolation.begin',
            'meta.interpolation punctuation.section.interpolation.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Parameters eg: <>',
        scope: [
            'punctuation.definition.tag.begin',
            'punctuation.definition.tag.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Parameters eg: []',
        scope: [
            'punctuation.section.sequence.begin',
            'punctuation.section.sequence.end',
            'punctuation.definition.link.begin',
            'punctuation.definition.link.end',
            'punctuation.definition.image.begin',
            'punctuation.definition.image.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name:
            'PUNCTUATION - Line-continuation characters, such as in Python and R',
        scope: ['punctuation.separator.continuation'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name:
            'PUNCTUATION - Member access, scope resolution, or similar constructs',
        scope: ['punctuation.accessor'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Property list, such CSS in HTML',
        scope: ['punctuation.section.property-list'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Section mapping, such as JSON, eg: "{}"',
        scope: [
            'punctuation.section.mapping.begin',
            'punctuation.section.mapping.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
];
