import common from './rules/common';
import css from './rules/css';
import diff from './rules/diff';
import git from './rules/git';
import html from './rules/html';
import javascript from './rules/javascript';
import markdown from './rules/markdown';
import sql from './rules/sql';

export const defaultRules = [
    common,
    diff,
    css,
    git,
    html,
    javascript,
    markdown,
    sql
];
