export default [
    {
        name: 'DIFF - Deleted',
        scope: ['diff.deleted'],
        settings: {
            background: 'color(var(diffDeleted) alpha(0.20))'
        },
    },
    {
        name: 'DIFF - Deleted Char',
        scope: ['diff.deleted.char'],
        settings: {
            background: 'color(var(diffDeleted) alpha(0.20))'
        },
    },
    {
        name: 'DIFF - Inserted',
        scope: ['diff.inserted'],
        settings: {
            background: 'color(var(diffAdded) alpha(0.20))'
        },
    },
    {
        name: 'DIFF - Inserted Char',
        scope: ['diff.inserted.char'],
        settings: {
            background: 'color(var(diffAdded) alpha(0.20))'
        },
    },
];
