import { Rules } from '../../../types';

export default [
    {
        name: 'YAML - Key',
        scope: ['entity.name.tag.yaml'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        name: 'YAML - String',
        scope: ['source.yaml string.unquoted'],
        settings: {
            foreground: 'var(green)',
        },
    },
] as Rules[];
