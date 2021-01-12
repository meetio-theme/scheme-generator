# Sublime Text Scheme Generator

[![GitHub tag](https://img.shields.io/github/release/meetio-theme/scheme-generator.svg?style=for-the-badge)](https://github.com/meetio-theme/scheme-generator/releases)
![Sublime Version](https://img.shields.io/badge/built_for_sublimetext-3179-e79330?style=for-the-badge&logo=sublime-text)
[![GitHub Issues](https://img.shields.io/github/issues/meetio-theme/scheme-generator.svg?style=for-the-badge)](https://github.com/meetio-theme/scheme-generator/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/meetio-theme/scheme-generator/blob/master/LICENSE)

## Getting started

```bash
# Using NPM
npm i @meetio/scheme-generator -D

# Using Yarn
yarn add @meetio/scheme-generator
```

In addition to the base settings, `ISchemeSetting` provides more options for `colors`, `ui`, `rules` and `useDefaultRules`.
There is also an overrides property, which allows you to set any color key from the [Color Scheme Reference](https://www.sublimetext.com/docs/3/color_schemes.html) directly.

### Example

This is all that's needed to generate a great looking theme:

```ts
import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';

const settings: ISchemeSetting = {
    colors: {
        accent: '#80cbc4',
        cursor: '#ffcc00',
        foreground: '#eeffff',
        background: '#263238',
        comments: '#546e7a',
        deprecated: '#ffc777a1',
        invalid: '#d46c6c66',
        diffAdded: '#addb67',
        diffModified: '#e2b93d',
        diffDeleted: '#ef5350',
        base: {
            white: '#ffffff',
            black: '#000000',
            red: '#f07178',
            orange: '#f78c6c',
            yellow: '#ffcb6b',
            green: '#c3e88d',
            cyan: '#89ddff',
            blue: '#82aaff',
            purple: '#c792ea',
            brown: '#916b53',
            pink: '#ff9cac',
            violet: '#bb80b3',
        },
    },
    ui: {
        tags_options: 'underline',
        brackets_options: 'underline, glow',
        line_highlight: '#00000040',
        selection: '#80CBC420',
        gutter_foreground: '#37474F',
        shadow: '#00000030',
        find_highlight: '#FFCC00',
        inactive_selection: '#00000030',
    },
    rules: [
        {
            name: "[SublimeLinter] Error",
            scope: ["sublimelinter.mark.error"],
            settings: {
                foreground: "var(invalid)",
            },
        },
        {
            name: "[SublimeLinter] Gutter mark",
            scope: ["sublimelinter.gutter-mark"],
            settings: {
                foreground: "var(blue)",
            },
        },
    ],
};

generateScheme({
    name: 'Scheme Example',
    author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    schemeName: 'Scheme Example',
    settings,
});
```

### Support

Support below means that the standard Sublime Text grammar has explicit support for the languages.
Other languages will probably still look alright but there is no guarantee that they will.

-   CSS
-   SASS/SCSS
-   HTML
-   JSON
-   JavaScript
-   TypeScript
-   Markdown
-   SQL
-   PHP
-   Python

### Development

```bash
# Using NPM
npm run watch

# Using Yarn
yarn run watch
```

> Project inspired on [code-theme-generator](https://github.com/moxer-theme/code-theme-generator) for VSCode.
