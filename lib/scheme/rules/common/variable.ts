import { Rules } from '../../../interfaces';

export default [
    {
        name: 'VARIABLE - Declaration',
        scope: ['variable.declaration', 'variable.other'],
        settings: {
            foreground: 'var(brown)',
        },
    },
    {
        name: 'VARIABLE - A generic variable',
        scope: ['variable.other.readwrite'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: 'VARIABLE - Symbols that are part of the variable name',
        scope: ['punctuation.definition.variable'],
        settings: {
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'VARIABLE - Immutable variables',
        scope: ['variable.other.constant'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: 'VARIABLE - Reserved variable names that are specified by the language, such as this, self, super',
        scope: ['variable.language'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: 'VARIABLE - Parameters to a function or methods',
        scope: ['variable.parameter'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: 'VARIABLE - Fields, properties, members and attributes of a class',
        scope: ['variable.other.member'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'VARIABLE - Function and method name',
        scope: ['variable.function'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'VARIABLE - The final label in an identifier that is part of an annotation',
        scope: ['variable.annotation'],
        settings: {
            foreground: 'var(yellow)',
        },
    }
] as Rules[];
