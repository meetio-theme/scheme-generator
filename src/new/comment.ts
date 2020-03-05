export default [
    {
        name: 'Comment',
        scope: [
            'comment.line',
            'comment.block',
            'comment.block.documentation',
            'punctuation.definition.comment',
            'meta.toc-list',
        ],
        settings: {
            foreground: 'var(comments)',
            font_style: 'italic',
        },
    },
];
