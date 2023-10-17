import {
    bgRed,
    bgGreen,
    yellow,
    green,
    red,
    blue,
    bold,
    underline,
} from 'picocolors';

const duplicated = (scope: string, name?: string) =>
    console.log(
        bgRed(bold(' ‼ERROR‼ ')) +
            ' － Duplicated scope [' +
            green(bold(scope)) +
            '] overwrite by ' +
            yellow(name)
    );

const success = (scheme: string, folder: string) => {
    console.log(
        bgGreen(bold(' SUCCESS ')) +
            ' － Scheme ' +
            blue(bold(`${scheme}.sublime-color-scheme`)) +
            ' created in ' +
            yellow(underline(folder)) +
            ' folder'
    );
};

const error = <T>(error?: T) =>
    typeof error === 'string'
        ? console.log(red(bold(error)))
        : console.log(JSON.stringify(error));

export const log = { duplicated, success, error };
