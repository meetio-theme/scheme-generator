export default [
    {
        name: 'DIFF - Deleted',
        scope: ['diff.deleted'],
        settings: {
            background: 'color(var(red) alpha(0.20))',
            foreground_adjust: 'l(+ 5%)',
        },
    },
    {
        name: 'DIFF - Deleted Char',
        scope: ['diff.deleted.char'],
        settings: {
            background: 'color(var(red) alpha(0.20))',
            foreground_adjust: 'l(+ 10%)',
        },
    },
    {
        name: 'DIFF - Inserted',
        scope: ['diff.inserted'],
        settings: {
            background: 'color(var(green) alpha(0.20))',
            foreground_adjust: 'l(+ 5%)',
        },
    },
    {
        name: 'DIFF - Inserted Char',
        scope: ['diff.inserted.char'],
        settings: {
            background: 'color(var(green) alpha(0.20))',
            foreground_adjust: 'l(+ 10%)',
        },
    },
];
