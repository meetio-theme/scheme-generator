/* eslint-disable no-undef */
import { generateScheme, ISchemeSetting } from '../dist/index';

const settings: ISchemeSetting = {
    colors: {
        cursor: '#67d2ff',
        foreground: '#bfcdf4',
        background: '#212339',
        comments: '#637777',
        blue: '#82aaff',
        brown: '#c17e70',
        cyan: '#50c4fa',
        green: '#c3e88d',
        orange: '#ff966c',
        pink: '#fca7ea',
        purple: '#c099ff',
        red: '#ff757f',
        yellow: '#ffc777',
        deprecated: '#ffc777a1',
        invalid: '#d46c6c66',
        diffAdded: '#addb67',
        diffModified: '#e2b93d',
        diffDeleted: '#ef5350',
    },
    ui: {
        caret: 'var(orange)',
    },
    rules: [
        {
            name: '[OVERWRITE] - Function declaration',
            scope: ['meta.function-call', 'entity.name.function'],
            settings: {
                font_style: 'glow',
            },
        },
        {
            name: '[OVERWRITE] - Function call',
            scope: ['variable.function'],
            settings: {
                foreground: 'var(cyan)',
                font_style: 'glow',
            },
        },
    ],
};

generateScheme(
    'Scheme Example',
    'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    'Scheme-Example',
    settings,
    'schemes'
);
