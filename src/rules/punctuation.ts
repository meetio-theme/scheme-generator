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
        name: 'PUNCTUATION - Line-continuation characters, such as in Python and R',
        scope: ['punctuation.separator.continuation'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'PUNCTUATION - Member access, scope resolution, or similar constructs',
        scope: ['punctuation.accessor'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
];
