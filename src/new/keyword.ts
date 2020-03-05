export default [
    {
        name:
            'Control keywords examples include if, try, end and while. Some syntaxes prefer to mark if and else with the conditional variant.',
        scope: [
            'keyword.control',
            'keyword.control.conditional',
            'keyword.control.import',
        ],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'Keywords that contain punctuation, such as the @ symbol in CSS',
        scope: ['punctuation.definition.keyword'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'All remaining non-operator keywords fall under the other',
        scope: ['keyword.other'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name:
            'Operators are typically symbols, so the term keyword can seem somewhat contradictory.',
        scope: [
            'keyword.operator',
            'keyword.operator.assignment',
            'keyword.operator.arithmetic',
            'keyword.operator.bitwise',
            'keyword.operator.logical',
        ],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        name:
            'When the operator is a word, such as and, or or not, the following variant is used:',
        scope: ['keyword.operator.word'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
];
