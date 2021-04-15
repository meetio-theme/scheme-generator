export default [
    {
        name: 'CONSTANT - Numeric literals, including integers, floats, etc...',
        scope: [
            'constant.numeric',
            'constant.numeric.integer',
            'constant.numeric.integer.binary',
            'constant.numeric.integer.octal',
            'constant.numeric.integer.decimal',
            'constant.numeric.integer.hexadecimal',
            'constant.numeric.integer.other',
            'constant.numeric.float',
            'constant.numeric.float.binary',
            'constant.numeric.float.octal',
            'constant.numeric.float.decimal',
            'constant.numeric.float.hexadecimal',
            'constant.numeric.float.other',
            'constant.numeric.complex',
            'constant.numeric.complex.real',
            'constant.numeric.complex.imaginary',
        ],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        name: 'CONSTANT - Constants that are built into the language, such as booleans and null values',
        scope: ['constant.language'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'CONSTANT - Character escapes in strings',
        scope: ['constant.character.escape'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'CONSTANT - Formatting placeholders, such as those used for sprintf(), e.g. %s',
        scope: ['constant.other.placeholder'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'CONSTANT - Other language-specific constant values',
        scope: ['constant.other'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'CONSTANT - Other language-specific constant values',
        scope: ['constant.other.color'],
        settings: {
            foreground: 'var(pink)',
        },
    },
];
