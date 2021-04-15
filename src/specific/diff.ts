export default [
    {
        name: 'DIFF - Deleted',
        scope: ['diff.deleted'],
        settings: {
            background: 'var(diffDeleted)'
        },
    },
    {
        name: 'DIFF - Deleted Char',
        scope: ['diff.deleted.char'],
        settings: {
            background: 'var(diffDeleted)'
        },
    },
    {
        name: 'DIFF - Inserted',
        scope: ['diff.inserted'],
        settings: {
            background: 'var(diffAdded)'
        },
    },
    {
        name: 'DIFF - Inserted Char',
        scope: ['diff.inserted.char'],
        settings: {
            background: 'var(diffAdded)'
        },
    },
];
