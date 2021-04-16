import { UI } from '../../interfaces';

export { default as comment } from './common/comment';
export { default as constant } from './common/constant';
export { default as diff } from './common/diff';
export { default as entity } from './common/entity';
export { default as invalid } from './common/invalid';
export { default as keyword } from './common/keyword';
export { default as markup } from './common/markup';
export { default as meta } from './common/meta';
export { default as punctuation } from './common/punctuation';
export { default as source } from './common/source';
export { default as storage } from './common/storage';
export { default as string } from './common/string';
export { default as support } from './common/support';
export { default as text } from './common/text';
export { default as variable } from './common/variable';

export { default as css } from './languages/css';
export { default as html } from './languages/html';
export { default as git } from './languages/git';
export { default as js } from './languages/js';
export { default as json } from './languages/json';
export { default as jsx } from './languages/jsx';
export { default as python } from './languages/python';
export { default as vue } from './languages/vue';

export const ui: UI = {
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
