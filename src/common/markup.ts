export default [
    {
        name: 'MARKUP - Section headings',
        scope: ['markup.heading'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'MARKUP - Lists',
        scope: ['markup.list.unnumbered', 'markup.list.numbered'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'MARKUP - Bold',
        scope: ['markup.bold'],
        settings: {
            font_style: 'bold',
            foreground: 'var(red)',
        },
    },
    {
        name: 'MARKUP - Italic',
        scope: ['markup.italic'],
        settings: {
            font_style: 'italic',
            foreground: 'var(red)',
        },
    },
    {
        name: 'MARKUP - Underline',
        scope: ['markup.underline'],
        settings: {
            font_style: 'italic',
            foreground: 'var(purple)',
        },
    },
    {
        name: 'MARKUP - Underline Link',
        scope: ['markup.underline.link'],
        settings: {
            font_style: 'italic',
            foreground: 'var(red)',
        },
    },
    {
        name: 'MARKUP - Inserted',
        scope: ['markup.inserted'],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        name: 'MARKUP - Deleted',
        scope: ['markup.deleted'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: 'MARKUP - Blockquotes and other quote styles',
        scope: ['markup.quote'],
        settings: {
            font_style: 'italic',
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'MARKUP - Inline and block literal quoting',
        scope: ['markup.raw.inline', 'markup.raw.block'],
        settings: {
            background: 'color(var(blue) alpha(0.05))',
        },
    },
    {
        name: 'MARKUP - Inline and block literal quoting',
        scope: [
            'meta.code-fence.definition.begin.text.markdown-gfm',
            'meta.code-fence.definition.end.text.markdown-gfm',
            'markup.raw.code-fence.markdown-gfm',
        ],
        settings: {
            background: 'color(var(blue) alpha(0.05))',
        },
    },
    {
        name:
            'MARKUP - Other markup, including constructs such as footnotes and tables',
        scope: ['markup.other'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'MARKUP - Blockquote definition',
        scope: ['punctuation.definition.blockquote'],
        settings: {
            foreground: 'var(pink)',
        },
    },
    {
        name: 'MARKUP - Blockquote definition',
        scope: ['meta.link.inline.description'],
        settings: {
            foreground: 'var(green)',
        },
    },
];
