import comment from './rules/comment';
import constant from './rules/constant';
import entity from './rules/entity';
import invalid from './rules/invalid';
import keyword from './rules/keyword';
import markup from './rules/markup';
import meta from './rules/meta';
import punctuation from './rules/punctuation';
import source from './rules/source';
import storage from './rules/storage';
import string from './rules/string';
import support from './rules/support';
import text from './rules/text';
import variable from './rules/variable';

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
];
