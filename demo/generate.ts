/* eslint-disable no-undef */
import { generateScheme, ISchemeSetting } from '../dist/index';
const settings: ISchemeSetting = {
    colors: {
        cursor: '#80CBC4',
        foreground: '#A6ACCD',
        background: '#292D3E',
        comments: '#676E95',
        blue: '#82AAFF',
        brown: '#916b53',
        cyan: '#89DDFF',
        green: '#C3E88D',
        orange: '#F78C6C',
        pink: '#ff9cac',
        purple: '#C792EA',
        red: '#f07178',
        yellow: '#FFCB6B',
        deprecated: '#ffc777a1',
        invalid: '#d46c6c66',
        diffAdded: '#addb67',
        diffModified: '#e2b93d',
        diffDeleted: '#ef5350',
    },
    ui: {
        caret: 'var(orange)',
    },
    rules: [],
};

generateScheme(
    'Scheme-Example',
    'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    'Scheme-Example',
    settings,
    'schemes'
);
