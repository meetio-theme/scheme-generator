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
export { default as yaml } from './languages/yaml';

export const ui: UI = {
    background: 'var(background)',
    foreground: 'var(foreground)',
    invisibles: 'color(var(foreground) alpha(0.3))',
    caret: 'var(cursor)',
    block_caret: 'var(cursor)',
    block_caret_border: 'var(cursor)',
    block_caret_underline: 'var(cursor)',
    block_caret_corner_style: 'cut',
    block_caret_corner_radius: '2',
    line_highlight: 'color(var(foreground) alpha(0.1))',
    misspelling: 'var(blue)',
    fold_marker: 'var(yellow)',
    minimap_border: 'var(yellow)',
    accent: 'var(accent)',
    gutter: 'var(background)',
    gutter_foreground: 'color(var(foreground) alpha(0.2))',
    gutter_foreground_highlight: 'var(foreground)',
    line_diff_width: '2',
    line_diff_added: 'var(diffAdded)',
    line_diff_deleted: 'var(diffDeleted)',
    line_diff_modified: 'var(diffModified)',
    selection: 'color(var(foreground) alpha(0.10))',
    selection_border: 'var(cyan)',
    selection_border_width: '1',
    inactive_selection: 'color(var(cyan) alpha(0.1))',
    inactive_selection_border: 'color(var(cyan) alpha(0.1))',
    selection_corner_style: 'cut',
    selection_corner_radius: 'cut',
    highlight: 'var(yellow)',
    find_highlight: 'var(yellow)',
    find_highlight_foreground: 'var(background)',
    scroll_highlight: 'color(var(yellow) alpha(0.1))',
    scroll_selected_highlight: 'var(yellow)',
    rulers: 'color(var(foreground) alpha(0.1))',
    guide: 'color(var(cyan) alpha(0.1))',
    active_guide: 'var(cyan)',
    brackets_options: 'underline',
    brackets_foreground: 'var(cyan)',
    bracket_contents_options: 'underline',
    bracket_contents_foreground: 'var(yellow)',
    tags_options: 'underline',
    tags_foreground: 'var(cyan)',
    shadow: 'color(var(background) alpha(0.5))',
    stack_guide: 'var(brown)',
};
