/* eslint-disable no-undef */
import { generateScheme, IColor } from '../dist/index';

const colors = {
    cursor: '#ffcc00',
    foreground: '#dedfe4',
    background: '#011627',
    comments: '#637777',
    blue: '#82aaff',
    brown: '#c17e70',
    cyan: '#86e1fc',
    green: '#c3e88d',
    orange: '#ff966c',
    pink: '#ff5874',
    purple: '#c099ff',
    red: '#ff757f',
    yellow: '#ffc777',
    invalid: '#d46c6c66',
    diffAdded: '#addb67',
    diffModified: '#e2b93d',
    diffDeleted: '#ef5350',
};

const rules = [
    {
        name: 'Test 1',
        scope: ['comment, punctuation.definition.comment'],
        settings: {
            foreground: 'var(comments)',
            font_style: 'italic',
        },
    },
    {
        name: 'Test 2',
        scope: ['comment, punctuation.definition.comment'],
        settings: {
            foreground: 'var(comments)',
            font_style: 'italic',
        },
    },
];

generateScheme(
    'Moonlight',
    'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    'Moonlight',
    colors,
    rules,
    'examples'
);
