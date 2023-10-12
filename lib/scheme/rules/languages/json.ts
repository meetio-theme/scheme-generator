import { Rules } from '../../../types';

export default [
    {
        name: 'JSON - Key ',
        scope: ['meta.mapping.key.json string.quoted.double.json'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'JSON - Mapping Level 1',
        scope: [
            'source.json meta.mapping.value.json meta.mapping.key.json string.quoted.double.json',
        ],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'JSON - Mapping Level 2',
        scope: [
            'source.json meta.mapping.value.json meta.mapping.value.json meta.mapping.key.json string.quoted.double.json',
        ],
        settings: {
            foreground: 'var(orange)',
        },
    },
] as Rules[];
