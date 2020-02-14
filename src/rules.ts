import common from './rules/common';
import css from './rules/css';
import diff from './rules/diff';
import git from './rules/git';
import html from './rules/html';
import javascript from './rules/javascript';
import markdown from './rules/markdown';
import php from './rules/php';
import python from './rules/python';
import sql from './rules/sql';
import typescript from './rules/typescript';

export const defaultRules = [
    common,
    diff,
    css,
    git,
    html,
    javascript,
    markdown,
    php,
    python,
    sql,
    typescript
];
