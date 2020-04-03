export default [
    {
        name: 'GIT - Text',
        scope: [
            'text.git.commit meta.subject.git.commit markup.heading.subject.git.commit',
        ],
        settings: {
            foreground: 'var(foreground)',
        },
    },
    {
        name: 'GIT - Author',
        scope: [
            'text.git.commit meta.reference.username.git entity.name.reference.username.git',
        ],
        settings: {
            font_style: 'italic',
            foreground: 'var(cyan)',
        },
    },
    {
        name: 'GIT - Author Email',
        scope: ['text.git.commit entity.name.reference.email.git'],
        settings: {
            font_style: 'italic',
            foreground: 'var(blue)',
        },
    },
    {
        name: 'GIT - Timestamp',
        scope: ['text.git.commit comment.line.git.commit constant.language.timestamp.git.commit'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        name: 'GIT - Reference number',
        scope: [
            'text.git.commit meta.reference.issue.git constant.other.reference.issue.git',
        ],
        settings: {
            font_style: 'bold',
            foreground: 'var(purple)',
        },
    },
    {
        name: 'GIT - hash number',
        scope: [
            'text.git.commit meta.message.git.commit constant.other.hash.git.commit',
        ],
        settings: {
            font_style: 'bold',
            foreground: 'var(green)',
        },
    },
    {
        name: 'GIT - Resolved issue',
        scope: ['text.git.commit keyword.other.resolved-issue.git'],
        settings: {
            foreground: 'var(red)',
        },
    },
];
