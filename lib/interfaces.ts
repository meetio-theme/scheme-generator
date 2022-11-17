type ValidValues<T extends string, U extends string = T> = T extends string
    ? T | `${T} ${ValidValues<Exclude<U, T>>}`
    : never;

type FontStyle =
    | 'bold'
    | 'italic'
    | 'glow'
    | 'underline'
    | 'stippled_underline'
    | 'squiggly_underline';

type BracketsOptions =
    | 'glow'
    | 'underline'
    | 'stippled_underline'
    | 'squiggly_underline'
    | 'foreground'
    | 'bold'
    | 'italic';

type BracketContentsOptions =
    | 'glow'
    | 'underline'
    | 'stippled_underline'
    | 'squiggly_underline'
    | 'foreground';

type TagsOptions =
    | 'glow'
    | 'underline'
    | 'stippled_underline'
    | 'squiggly_underline'
    | 'foreground';

export interface Base {
    black?: string;
    blue?: string;
    gray?: string;
    brown?: string;
    cyan?: string;
    green?: string;
    orange?: string;
    pink?: string;
    purple?: string;
    red?: string;
    violet?: string;
    white?: string;
    yellow?: string;
}

export interface Colors {
    foreground: string;
    background: string;
    accent?: string;
    cursor?: string;
    comments?: string;
    invalid?: string;
    deprecated?: string;
    diffAdded?: string;
    diffModified?: string;
    diffDeleted?: string;
    base?: Base;
}

export interface Rules {
    /** The (arbitrary) name for the scope rule.*/
    name?: string;
    scope?: string[];
    settings?: {
        /** The text color. */
        foreground?: string;
        /** The background color. */
        background?: string;
        /** An adjustment to the `"foreground"` color, only valid with `"background"`. */
        foreground_adjust?: string;
        /** The text color when selected. */
        selection_foreground?: string;
        /** Zero or more of the following, separated by spaces: */
        font_style?: ValidValues<FontStyle>;
    };
}

export interface UI {
    /** The default background color. */
    background?: string;
    /** The default color for text. */
    foreground?: string;
    /** The color for whitespace, when rendered. When not specified, defaults to `foreground` with an opacity of `0.35`. */
    invisibles?: string;
    /** The color of the caret. */
    caret?: string;
    /** The color of the caret when using a block caret. (+3190) */
    block_caret?: string;
    /** The color of the border for a block caret. (+4086) */
    block_caret_border?: string;
    /** The color of the underline the block caret is drawn as when overlapping with a selection. (+4086) */
    block_caret_underline?: string;
    /** The style of corners to use for block carets. Options include: `round` (the default), `cut`` or `square`. (+4086) */
    block_caret_corner_style?: string;
    /** The radius to use when the `block_caret_corner_style` is `round` or `cut`. (+4086) */
    block_caret_corner_radius?: string;
    /** The background color of the line containing the caret. Only used when the `highlight_line` setting is enabled. */
    line_highlight?: string;
    /** The color to use for the squiggly underline drawn under misspelled words. */
    misspelling?: string;
    /** The color to use for the marker that indicates content has been folded. */
    fold_marker?: string;
    /** The color of the border drawn around the viewport area of the minimap when the setting `draw_minimap_border` is enabled. Note that the viewport is normally only visible on hover, unless the `always_show_minimap_viewport` setting is enabled.  */
    minimap_border?: string;
    /** A color made available for use by the theme. (+4050) */
    accent?: string;
    /** CSS passed to popups. */
    popup_css?: string;
    /** CSS passed to phantoms. */
    phantom_css?: string;
    /** CSS passed to HTML sheets. (+4065) */
    sheet_css?: string;
    /** The background color of the gutter. */
    gutter?: string;
    /** The color of line numbers in the gutter. */
    gutter_foreground?: string;
    /** The color of line numbers in the gutter when a line is highlighted. (+4050) */
    gutter_foreground_highlight?: string;
    /** The width of the diff lines, between 1 and 8. (+3186) */
    line_diff_width?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    /** The color of diff markers for added lines. (+3186) */
    line_diff_added?: string;
    /** The color of diff markers for modified lines. (+3186) */
    line_diff_modified?: string;
    /** The color of diff markers for deleted lines. (+3186) */
    line_diff_deleted?: string;
    /** The background color of selected text. */
    selection?: string;
    /** A color that will override the scope-based text color of the selection. */
    selection_foreground?: string;
    /** The color for the border of the selection. */
    selection_border?: string;
    /** The width of the selection border, from 0 to 4. */
    selection_border_width?: '0' | '1' | '2' | '3' | '4';
    /** The background color of a selection in a view that is not currently focused. */
    inactive_selection?: string;
    /** The color for the border of the selection in a view that is not currently focused. (+4074) */
    inactive_selection_border?: string;
    /** A color that will override the scope-based text color of the selection in a view that is not currently focused. */
    inactive_selection_foreground?: string;
    /** The style of corners to use on selections. */
    selection_corner_style?: 'round' | 'cut' | 'square';
    /** The radius to use when the selection_corner_style. */
    selection_corner_radius?: 'round' | 'cut';
    /** The border color for "other" matches when the Highlight matches option is selected in the Find panel. */
    highlight?: string;
    /** The background color of text matched by the Find panel. */
    find_highlight?: string;
    /** A color that will override the scope-based text color of text matched by the Find panel. */
    find_highlight_foreground?: string;
    /** The color search result positions drawn on top of the scroll bar. */
    scroll_highlight?: string;
    /** The color of the selected search result position drawn on top of the scroll bar. (+4050) */
    scroll_selected_highlight?: string;
    /** The color used to draw rulers. */
    rulers?: string;
    /** The color used to draw indent guides. Only used if the option `"draw_normal"` is present in the setting `indent_guide_options`. */
    guide?: string;
    /** The color used to draw the indent guides for the indentation levels containing the caret. Only used if the option `"draw_active"` is present in the setting `indent_guide_options`. */
    active_guide?: string;
    /** The color used to draw the indent guides for the parent indentation levels of the indentation level containing the caret. Only used if the option `"draw_active"` is present in the setting `indent_guide_options`. */
    stack_guide?: string;
    /** How brackets are highlighted when the caret is next to one: `underline` | `stippled_underline` | `squiggly_underline` | `foreground` | `bold` | `italic` */
    brackets_options?: ValidValues<BracketsOptions>;
    /** The color to use when drawing the style specified by `brackets_options`. */
    brackets_foreground?: string;
    /** How brackets are highlighted when the caret is positioned in between a pair of brackets: `underline` | `stippled_underline` | `squiggly_underline` | `foreground` */
    bracket_contents_options?: ValidValues<BracketContentsOptions>;
    /** The color to use when drawing the style specified by `brackets_contents_options`. */
    bracket_contents_foreground?: string;
    /** How tags are highlighted when the caret is inside of one: `underline` | `stippled_underline` | `squiggly_underline` | `foreground` */
    tags_options?: ValidValues<TagsOptions>;
    /** he color to use when drawing the style specified by tags_options. */
    tags_foreground?: string;
    /** The color of the shadow used to show when a text area can be horizontally scrolled. */
    shadow?: string;
    /** The width of the shadow in device-independent pixels. */
    shadow_width?: string;
}

export interface SchemeSetting {
    colors: Colors;
    ui?: UI;
    rules?: Rules[];
}

interface Output {
    /** Scheme file name */
    filename: string;
    /** Folder destination */
    path?: string;
    /** Extension file */
    extension?: string;
}

export interface GenerateScheme {
    /** Name of Scheme */
    name: string;
    /** Author name */
    author: string;
    /** Settings of scheme */
    settings: SchemeSetting;
    /** Output Management */
    output: Output;
}
