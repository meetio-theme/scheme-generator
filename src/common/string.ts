export default [
    {
        name: 'STRING - Basic strings use the one',
        scope: [
            'string.quoted.single',
            'string.quoted.double',
            'string.quoted.triple',
        ],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        name:
            'STRING - Strings that used unconventional quotes, such as < and > with C imports',
        scope: ['string.quoted.other'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name:
            'STRING - The entirety of a string, along with all punctuation, prefixes, suffixes and interpolations',
        scope: ['meta.string'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'STRING - Punctuation at the beginning and end of strings',
        scope: [
            'punctuation.definition.string.begin',
            'punctuation.definition.string.end',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'STRING - Unquoted strings, such as in Shell and Batch File',
        scope: ['string.unquoted'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'STRING - Regular expression literal',
        scope: ['string.regexp'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'STRING - When a string contain interpolated code',
        scope: ['meta.interpolation'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'STRING - The punctuation for an interpolated expression',
        scope: [
            'punctuation.section.interpolation.begin',
            'punctuation.section.interpolation.end',
        ],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'STRING - Between the punctuation, the interpolated expression',
        scope: ['source.language-suffix.embedded'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
];
