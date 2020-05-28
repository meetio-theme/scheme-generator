export interface IRules {
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
    rules?: Array<IRules>;
    useDefault?: boolean;
}

export interface IUi {
    accent?: string;
    active_guide?: string;
    background?: string;
    block_caret?: string;
    bracket_contents_foreground?: string;
    bracket_contents_options?: string;
    brackets_foreground?: string;
    brackets_options?: string;
    caret?: string;
    find_highlight?: string;
    find_highlight_foreground?: string;
    fold_marker?: string;
    foreground?: string;
    guide?: string;
    gutter?: string;
    gutter_foreground?: string;
    highlight?: string;
    inactive_selection?: string;
    inactive_selection_border?: string;
    inactive_selection_foreground?: string;
    invisibles?: string;
    line_diff_added?: string;
    line_diff_deleted?: string;
    line_diff_modified?: string;
    line_diff_width?: string;
    line_highlight?: string;
    minimap_border?: string;
    misspelling?: string;
    phantom_css?: string;
    popup_css?: string;
    rulers?: string;
    selection?: string;
    selection_border?: string;
    selection_border_width?: string;
    selection_corner_radius?: string;
    selection_corner_style?: string;
    selection_foreground?: string;
    shadow?: string;
    shadow_width?: string;
    sheet_css?: string;
    stack_guide?: string;
    tags_foreground?: string;
    tags_options?: string;
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
    deprecated: string;
    diffAdded: string;
    diffModified: string;
    diffDeleted: string;
}
