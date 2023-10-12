import * as fs from 'fs';
import * as path from 'path';
import { GenerateScheme } from '../interfaces';
import { log, duplicated } from '../utils';

export function generateScheme(options: GenerateScheme) {
    const { name, author, settings, output } = options;
    const { colors, ui, rules } = settings;
    const { base, ...rest } = colors;

    const dist = output.path || path.resolve('schemes');
    fs.mkdir(dist, () => {
        try {
            fs.writeFileSync(
                `${dist}/${output.filename}${
                    output.extension || '.sublime-color-scheme'
                }`,
                JSON.stringify(
                    {
                        name,
                        author,
                        variables: {
                            ...rest,
                            ...{
                                '--redish': base.red,
                                '--orangish': base.orange,
                                '--yellowish': base.yellow,
                                '--greenish': base.green,
                                '--cyanish': base.cyan,
                                '--bluish': base.blue,
                                '--purplish': base.purple,
                                '--pinkish': base.pink,
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
