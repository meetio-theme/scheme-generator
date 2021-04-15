/* eslint-disable no-undef */
import * as fs from 'fs';
import { GenerateScheme, Rules } from '../interfaces';
import { duplicated, error, success } from '../utils/log';
import { defaultGlobals, defaultRules } from './rules';

export function generateScheme(options: GenerateScheme) {
    const { name, author, schemeName, settings, distFolder = 'schemes' } = options;
    const { colors, ui, rules, useDefaultRules = true } = settings;
    const { base, ...rest } = colors;
    const allRules: Array<{ name: string; scope: string }> = [];
    const allScopes = new Set();
    let spread = [rules];

    if (useDefaultRules) {
        spread = [...defaultRules, [...rules]];
    }

    spread.forEach((rule: Rules[]) => {
        rule.forEach((item: Rules) => {
            item.scope.forEach((i: string) => {
                if (allScopes.has(i)) {
                    duplicated(i, item.name);
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

    fs.mkdir(distFolder, () => {
        try {
            fs.writeFileSync(
                `${distFolder}/${schemeName}.sublime-color-scheme`,
                JSON.stringify(
                    {
                        name,
                        author,
                        variables: { ...rest, ...base },
                        globals: Object.assign(defaultGlobals, ui),
                        rules: allRules,
                    },
                    null,
                    4
                )
            );
            success(schemeName, distFolder);
        } catch (e) {
            error(e);
        }
    });
}
