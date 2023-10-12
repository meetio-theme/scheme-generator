import { Rules } from "../../../types";

export default [
    {
        name: 'JSX - Meta',
        scope: ['meta.jsx.js'],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: 'JSX - String Quoted',
        scope: ['string.quoted.jsx'],
        settings: {
            foreground: 'var(green)',
        },
    },
] as Rules[];
