import { Rules } from '../../../types';

export default [
    {
        name: 'VUE - Console, "console"',
        scope: ['text.html.vue meta.property.object'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
] as Rules[];
