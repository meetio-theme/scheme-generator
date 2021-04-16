import { SchemeSetting, generateScheme, options } from '../dist/index';

const { ui, ...rest } = options;

const settings: SchemeSetting = {
    colors: {
        accent: '#80CBC4',
        cursor: '#FFCC00',
        foreground: '#EEFFFF',
        background: '#263238',
        comments: '#546E7A',
        deprecated: '#FFC777A1',
        invalid: '#D46C6C66',
        diffAdded: '#ADDB67',
        diffModified: '#E2B93D',
        diffDeleted: '#EF5350',
        base: {
            white: '#FFFFFF',
            black: '#000000',
            red: '#F07178',
            orange: '#F78C6C',
            yellow: '#FFCB6B',
            green: '#C3E88D',
            cyan: '#89DDFF',
            blue: '#82AAFF',
            purple: '#C792EA',
            brown: '#916B53',
            pink: '#FF9CAC',
            violet: '#BB80B3',
        },
    },
    ui: {
        ...ui,
        ...{
            line_diff_width: '5',
            tags_options: 'underline',
            brackets_options: 'underline, glow',
            line_highlight: '#00000040',
            selection: '#80CBC420',
            gutter_foreground: '#37474F',
            shadow: '#00000030',
            find_highlight: '#FFCC00',
            inactive_selection: '#00000030',
        },
    },
    rules: [].concat.apply([], Object.values(rest).map(item => item)),
};

generateScheme({
    name: 'Meetio Scheme Example',
    author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    output: {
        filename: 'Meetio Scheme Example',
    },
    settings,
});
