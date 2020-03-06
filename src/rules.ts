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

import html from './specific/html';
import css from './specific/css';
import js from './specific/js';
import json from './specific/json';
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
    js,
    json,
    python,
    vue,
];
