import * as fs from 'fs';
import * as path from 'path';

import { GenerateScheme, Rules } from '../interfaces';
import { duplicated, error, success } from '../utils/log';

export function generateScheme(options: GenerateScheme) {
    const {
        name,
        author,
        settings,
        output,
    } = options;
    const { colors, ui, rules } = settings;
    const { base, ...rest } = colors;

    const allRules: Array<{ name: string; scope: string }> = [];
    // eslint-disable-next-line no-undef
    const scopes = new Set();

    [rules].forEach((rule: Rules[]) => {
        rule.forEach((item: Rules) => {
            item.scope.forEach((i: string) => {
                if (scopes.has(i)) {
                    duplicated(i, item.name);
                }
                scopes.add(i);
            });

            allRules.push({
                name: item.name,
                scope: item.scope.toString(),
            });

            Object.assign(allRules[allRules.length - 1], item.settings);
        });
    });

    // eslint-disable-next-line no-undef
    const dist = output.path || path.resolve('schemes');
    fs.mkdir(dist, () => {
        try {
            fs.writeFileSync(
                `${dist}/${output.filename}.sublime-color-scheme`,
                JSON.stringify(
                    {
                        name,
                        author,
                        variables: { ...rest, ...base },
                        globals: ui,
                        rules: allRules,
                    },
                    null,
                    4
                )
            );
            success(output.filename, output.path || 'schemes');
        } catch (e) {
            error(e);
        }
    });
}
