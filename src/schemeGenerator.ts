/* eslint-disable no-undef */
import * as fs from 'fs';
import { defaultRules } from './rules';
import * as globals from './globals';

import { IColors, IRules } from './interfaces';

export function generateScheme(
    name: string,
    author: string,
    schemeName: string,
    colors?: IColors,
    rules?: IRules[],
    dist: string = 'schemes'
) {
    const allRules: any = [];
    const allScopes = new Set();

    [...defaultRules, [...rules]].forEach((rule: any) => {
        rule.forEach((item: any) => {
            item.scope.forEach((i: any) => {
                if (allScopes.has(i)) {
                    console.log(`duplicated scope: ${i} in ${item.name}`);
                }
                allScopes.add(i);
            });

            allRules.push({
                name: item.name,
                scope: item.scope.toString(),
            });

            Object.assign(allRules[allRules.length - 1], item.settings);
        });
    });

    fs.mkdir(dist, () => {
        fs.writeFileSync(
            `${dist}/${schemeName}.sublime-color-scheme`,
            JSON.stringify(
                { name, author, variables: colors, globals, rules: allRules },
                null,
                4
            )
        );
    });
}
