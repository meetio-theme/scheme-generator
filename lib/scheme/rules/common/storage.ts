import { Rules } from '../../../interfaces';

export default [
    {
        name:
            'STORAGE - Types should use the following scope. Examples include int, bool and char',
        scope: ['storage.type'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name:
            'STORAGE - Keywords that affect the storage of a variable, function or data structure should use the following scope. Examples include static, inline, const, public and private',
        scope: ['storage.modifier'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'STORAGE - Keywords for functions or methods',
        scope: ['storage.type.function keyword.declaration.function'],
        settings: {
            foreground: 'var(pink)',
        },
    },
    {
        name: 'STORAGE - Keywords for classes, structs, interfaces',
        scope: [
            'storage.type.class keyword.declaration.class',
            'storage.type.struct keyword.declaration.struct',
            'storage.type.enum keyword.declaration.enum',
            'storage.type.union keyword.declaration.union',
            'storage.type.trait keyword.declaration.trait',
            'storage.type.interface keyword.declaration.interface',
            'storage.type.impl keyword.declaration.impl',
            'storage.type keyword.declaration.type',
        ],
        settings: {
            foreground: 'var(purple)',
        },
    },
] as Rules[];
