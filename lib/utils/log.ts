import chalk from 'chalk';

const duplicated = (scope: string, name: string) =>
    console.log(
        chalk.bold.bgRed(' ‼ERROR‼ ') +
            ' － Duplicated scope [' +
            chalk.bold.green(scope) +
            '] overwrite by ' +
            chalk.yellow(name)
    );

const success = (scheme: string, folder: string) => {
    console.log(
        chalk.bold.bgGreen(' SUCCESS ') +
            ' － Scheme ' +
            chalk.bold.cyan(`${scheme}.sublime-color-scheme`) +
            ' created in ' +
            chalk.underline.yellow(folder) +
            ' folder'
    );
};

const error = (error: string) => console.log(chalk.bold.red(error));

export const log = { duplicated, success, error };
