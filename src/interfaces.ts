export interface ICustomToken {
    name: string;
    scope: string[];
    settings: {
        foreground?: string;
        background?: string;
        font_style?: string;
    };
}

export interface ISchemeSetting {
    colors: IColors;
    ui?: IUi;
    rules?: Array<ICustomToken>;
}

export interface IUi {
    background?: string;
    foreground?: string;
    invisibles?: string;
    caret?: string;
    block_caret?: string;
    line_highlight?: string;
    misspelling?: string;
    fold_marker?: string;
    minimap_border?: string;
    accent?: string;
    popup_css?: string;
    phantom_css?: string;
    sheet_css?: string;
    gutter?: string;
    gutter_foreground?: string;
    rulers?: string;
    line_diff_width?: string;
    line_diff_added?: string;
    line_diff_modified?: string;
    line_diff_deleted?: string;
    selection?: string;
    selection_foreground?: string;
    selection_border?: string;
    selection_border_width?: string;
    inactive_selection?: string;
    inactive_selection_foreground?: string;
    selection_corner_style?: string;
    selection_corner_radius?: string;
    highlight?: string;
    find_highlight?: string;
    find_highlight_foreground?: string;
    guide?: string;
    active_guide?: string;
    stack_guide?: string;
    brackets_options?: string;
    brackets_foreground?: string;
    bracket_contents_options?: string;
    bracket_contents_foreground?: string;
    tags_options?: string;
    tags_foreground?: string;
    shadow?: string;
    shadow_width?: string;
}

export interface IColors {
    cursor: string;
    foreground: string;
    background: string;
    comments: string;
    blue: string;
    brown: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    purple: string;
    red: string;
    yellow: string;
    invalid: string;
    diffAdded: string;
    diffModified: string;
    diffDeleted: string;
}
