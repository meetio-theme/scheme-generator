import { UI } from '../../interfaces';

import comment from './common/comment';
import constant from './common/constant';
import entity from './common/entity';
import invalid from './common/invalid';
import keyword from './common/keyword';
import markup from './common/markup';
import meta from './common/meta';
import punctuation from './common/punctuation';
import source from './common/source';
import storage from './common/storage';
import string from './common/string';
import support from './common/support';
import text from './common/text';
import variable from './common/variable';

import CSS from './languages/css';
import diff from './languages/diff';
import html from './languages/html';
import git from './languages/git';
import js from './languages/js';
import json from './languages/json';
import jsx from './languages/jsx';
import python from './languages/python';
import vue from './languages/vue';

export const defaultGlobals: UI = {
    accent: 'var(accent)',
    active_guide: 'var(cyan)',
    background: 'var(background)',
    block_caret: 'var(cursor)',
    bracket_contents_foreground: 'var(yellow)',
    bracket_contents_options: 'underline',
    brackets_foreground: 'var(cyan)',
    brackets_options: 'underline',
    caret: 'var(cursor)',
    find_highlight: 'var(yellow)',
    find_highlight_foreground: 'var(background)',
    fold_marker: 'var(yellow)',
    foreground: 'var(foreground)',
    gutter: 'var(background)',
    gutter_foreground: 'color(var(foreground) alpha(0.2))',
    highlight: 'var(yellow)',
    inactive_selection: 'color(var(cyan) alpha(0.1))',
    inactive_selection_border: 'color(var(cyan) alpha(0.1))',
    invisibles: 'color(var(foreground) alpha(0.3))',
    line_diff_added: 'var(diffAdded)',
    line_diff_deleted: 'var(diffDeleted)',
    line_diff_modified: 'var(diffModified)',
    line_diff_width: '2',
    line_highlight: 'color(var(foreground) alpha(0.1))',
    misspelling: 'var(blue)',
    selection: 'color(var(foreground) alpha(0.10))',
    selection_border: 'var(cyan)',
    selection_corner_radius: 'cut',
    selection_corner_style: 'cut',
    shadow: 'color(var(background) alpha(0.5))',
    stack_guide: 'var(brown)',
    tags_foreground: 'var(cyan)',
    tags_options: 'underline',
};

export const defaultRules = [
    comment,
    constant,
    entity,
    invalid,
    keyword,
    markup,
    meta,
    punctuation,
    source,
    storage,
    string,
    support,
    text,
    variable,
    html,
    css,
    diff,
    git,
    js,
    json,
    jsx,
    python,
    vue,
];
