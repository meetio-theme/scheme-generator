export interface ISchemeSetting {
    name: string;
    scope: string[];
    settings: {
        foreground?: string;
        background?: string;
        font_style?: string;
    };
}

export interface IRules {
    [index: number]: ISchemeSetting;
}

export interface IGlobal {
    active_guide?: string;
    background?: string;
    block_caret?: string;
    caret?: string;
    find_highlight?: string;
    find_highlight_foreground?: string;
    fold_marker?: string;
    foreground?: string;
    gutter?: string;
    gutter_foreground?: string;
    highlight?: string;
    inactive_selection?: string;
    invisibles?: string;
    line_diff_added?: string;
    line_diff_deleted?: string;
    line_diff_modified?: string;
    line_diff_width?: string;
    rulers?: string;
    line_highlight?: string;
    misspelling?: string;
    selection?: string;
    selection_border?: string;
    selection_corner_radius?: string;
    selection_corner_style?: string;
    shadow?: string;
    stack_guide?: string;
    tags_options?: string;
    tags_foreground?: string;
    brackets_options?: string;
    brackets_foreground?: string;
    bracket_contents_options?: string;
    bracket_contents_foreground?: string;
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
