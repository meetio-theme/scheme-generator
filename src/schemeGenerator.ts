/* eslint-disable no-undef */
import * as fs from 'fs';
import { defaultRules } from './rules';
import { defaultGlobals } from './globals';

import { ISchemeSetting, IRules } from './interfaces';

export function generateScheme(
    name: string,
    author: string,
    schemeName: string,
    settings: ISchemeSetting,
    dist: string = 'schemes'
) {
    const { colors, ui, rules } = settings;
    const allRules: any = [];
    const allScopes = new Set();

    [...defaultRules, [...rules]].forEach((rule: Array<IRules>) => {
        rule.forEach((item: IRules) => {
            item.scope.forEach((i: string) => {
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
                {
                    name,
                    author,
                    variables: colors,
                    globals: Object.assign(defaultGlobals, ui),
                    rules: allRules,
                },
                null,
                4
            )
        );
    });
}
