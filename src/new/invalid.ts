export default [
    {
        name: 'Elements that are illegal in a specific context',
        scope: ['invalid.illegal'],
        settings: {
            foreground: 'var(invalid)',
        },
    },
    {
        name: 'Deprecated elements',
        scope: ['invalid.deprecated'],
        settings: {
            foreground: 'var(deprecated)',
        },
    },
];
