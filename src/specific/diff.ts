export default [
    {
        name: 'DIFF - Deleted',
        scope: ['diff.deleted'],
        settings: {
            background: 'var(red)',
            foreground_adjust: 'l(+ 5%)',
        },
    },
    {
        name: 'DIFF - Deleted Char',
        scope: ['diff.deleted.char'],
        settings: {
            background: 'var(red)',
            foreground_adjust: 'l(+ 10%)',
        },
    },
    {
        name: 'DIFF - Inserted',
        scope: ['diff.inserted'],
        settings: {
            background: 'var(green)',
            foreground_adjust: 'l(+ 5%)',
        },
    },
    {
        name: 'DIFF - Inserted Char',
        scope: ['diff.inserted.char'],
        settings: {
            background: 'var(green)',
            foreground_adjust: 'l(+ 10%)',
        },
    },
];
