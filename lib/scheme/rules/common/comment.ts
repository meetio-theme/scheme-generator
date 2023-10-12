import { Rules } from '../../../types';

export default [
    {
        name: 'COMMENTS - Single and multi-line comments should use, respectively',
        scope: ['comment', 'comment.line', 'comment.block'],
        settings: {
            foreground: 'var(comments)',
            font_style: 'italic',
        },
    },
    {
        name:
            'COMMENTS - Multi-line comments used as documentation, such as Javadoc or PhpDo',
        scope: ['comment.block.documentation'],
        settings: {
            foreground: 'var(comments)',
            font_style: 'italic',
        },
    },
    {
        name: 'COMMENTS - Symbols that delineate a comment, e.g. // or /*',
        scope: ['punctuation.definition.comment'],
        settings: {
            foreground: 'var(comments)',
            font_style: 'italic',
        },
    },
    {
        name: 'COMMENTS - Special syntax that denote a section of code',
        scope: ['meta.toc-list'],
        settings: {
            foreground: 'var(comments)',
            font_style: 'italic',
        },
    },
] as Rules[];
