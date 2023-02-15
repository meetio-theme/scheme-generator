import { Rules } from '../../../interfaces';

export default [
    {
        name: 'HTML - Attribute name ID',
        scope: ['meta.attribute-with-value.id. entity.other.attribute-name.id'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        name: 'HTML - Attribute name ID',
        scope: ['meta.attribute-with-value.id. string.quoted.double. meta.toc-list.id.'],
        settings: {
            foreground: 'var(green)',
            font_style: 'normal',
        },
    },
] as Rules[];
