import { generateScheme, ISchemeSetting } from '../dist/index';

const settings: ISchemeSetting = {
    colors: {
        accent: '#80CBC4',
        cursor: '#FFCC00',
        foreground: '#EEFFFF',
        background: '#263238',
        comments: '#546E7A',
        deprecated: '#ffc777a1',
        invalid: '#d46c6c66',
        diffAdded: '#addb67',
        diffModified: '#e2b93d',
        diffDeleted: '#ef5350',
        base: {
            white: '#ffffff',
            black: '#000000',
            red: '#f07178',
            orange: '#F78C6C',
            yellow: '#FFCB6B',
            green: '#C3E88D',
            cyan: '#89DDFF',
            blue: '#82AAFF',
            purple: '#C792EA',
            brown: '#916b53',
            pink: '#ff9cac',
            violet: '#bb80b3',
        },
    },
    ui: {
        tags_options: 'underline',
        brackets_options: 'underline, glow',
        line_highlight: '#00000040',
        selection: '#80CBC420',
        gutter_foreground: '#37474F',
        shadow: '#00000030',
        find_highlight: '#FFCC00',
        inactive_selection: '#00000030',
    },
    rules: [],
};

generateScheme({
    name: 'Meetio Scheme Example',
    author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    schemeName: 'Meetio Scheme Example',
    settings,
});
