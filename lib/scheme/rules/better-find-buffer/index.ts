import { Rules } from '../../../interfaces';

export default [
    {
        name: 'Better Find Buffer - Total Files Count',
        scope: ['variable.total_files_count.find-in-files'],
        settings: {
            foreground: 'var(blue)',
            font_style: 'bold',
        },
    },
    {
        name: 'Better Find Buffer - Query Files Count',
        scope: ['string.query.find-in-files'],
        settings: {
            foreground: 'var(green)',
            font_style: '',
        },
    },
    {
        name: 'Better Find Buffer - Match Count',
        scope: ['variable.matched_count.find-in-files'],
        settings: {
            foreground: 'var(green)',
            font_style: 'bold',
        },
    },
    {
        name: 'Better Find Buffer - Match Files Count',
        scope: ['variable.matched_files_count.find-in-files'],
        settings: {
            foreground: 'var(blue)',
            font_style: 'bold',
        },
    },
    {
        name: 'Better Find Buffer - No Match',
        scope: ['variable.no_matches.find-in-files'],
        settings: {
            foreground: 'var(red)',
            font_style: 'bold',
        },
    },
    {
        name: 'Better Find Buffer - Line Number',
        scope: ['constant.numeric.line-number.find-in-files'],
        settings: {
            foreground: 'color(var(blue) alpha(0.2))',
        },
    },
    {
        name: 'Better Find Buffer - Match',
        scope: ['match.find-in-files'],
        settings: {
            background: 'color(var(blue) alpha(0.2))',
        },
    },
    {
        name: 'Better Find Buffer - Line Number Match',
        scope: ['constant.numeric.line-number.match.find-in-files'],
        settings: {
            foreground: 'var(accent)',
            background: 'color(var(blue) alpha(0.1))',
        },
    },
    {
        name: 'Better Find Buffer - Punctuation Line Number Match',
        scope: ['punctuation.line-number.match.find-in-files'],
        settings: {
            foreground: 'color(var(blue) alpha(0.1))',
            background: 'color(var(blue) alpha(0.1))',
        },
    },
    {
        name: 'Better Find Buffer - File name',
        scope: ['entity.name.filename.find-in-files'],
        settings: {
            foreground: 'var(foreground)',
            background: 'var(accent)',
            font_style: 'bold',
        },
    },
    {
        name: 'Better Find Buffer - Footer',
        scope: ['footer.find-in-files'],
        settings: {
            background: 'var(background)',
        },
    },
] as Rules[];
