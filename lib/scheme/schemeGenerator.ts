import * as fs from 'fs';
import * as path from 'path';
import { GenerateScheme, Rules } from '../interfaces';
import { log } from '../utils/log';

// eslint-disable-next-line no-undef
interface ScopeRules extends Omit<Rules, 'scope'> {
    scope: string;
}

function duplicated(rules: Rules[]): ScopeRules[] {
    const scopeRules: ScopeRules[] = [];
    // eslint-disable-next-line no-undef
    const scopes = new Set();

    [rules].forEach((rule: Rules[]) => {
        rule.forEach((item: Rules) => {
            item.scope.forEach((i: string) => {
                if (scopes.has(i)) {
                    log.duplicated(i, item.name);
                }
                scopes.add(i);
            });

            scopeRules.push({
                name: item.name,
                scope: item.scope.toString(),
            });

            Object.assign(scopeRules[scopeRules.length - 1], item.settings);
        });
    });

    return scopeRules;
}

export function generateScheme(options: GenerateScheme) {
    const { name, author, settings, output } = options;
    const { colors, ui, rules } = settings;
    const { base, ...rest } = colors;

    const dist = output.path || path.resolve('schemes');
    fs.mkdir(dist, () => {
        try {
            fs.writeFileSync(
                `${dist}/${output.filename}${output.extension || '.sublime-color-scheme'}`,
                JSON.stringify(
                    {
                        name,
                        author,
                        variables: {
                          ...rest,
                          ...{
                            "--redish": base.red,
                            "--orangish": base.orange,
                            "--yellowish": base.yellow,
                            "--greenish": base.green,
                            "--cyanish": base.cyan,
                            "--bluish": base.blue,
                            "--purplish": base.purple,
                            "--pinkish": base.pink,
                          },
                          ...base,
                        },
                        globals: ui,
                        rules: duplicated(rules),
                    },
                    null,
                    4
                )
            );
            log.success(output.filename, dist);
        } catch (e) {
            log.error(e);
        }
    });
}
