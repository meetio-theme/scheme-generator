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

import css from './specific/css';
import diff from './specific/diff';
import html from './specific/html';
import js from './specific/js';
import json from './specific/json';
import jsx from './specific/jsx';
import python from './specific/python';
import vue from './specific/vue';

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
    js,
    json,
    jsx,
    python,
    vue,
];
