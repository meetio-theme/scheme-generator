# Sublime Text Scheme Generator

## Getting started

```bash
# Using NPM
npm i @meetio/scheme-generator -D

# Using Yarn
yarn add @meetio/scheme-generator
```

In addition to the base settings, `ISchemeSetting` provides more options for `colors`, `ui`, and `rules`.
There is also an overrides property, which allows you to set any color key from the [Color Scheme Reference](https://www.sublimetext.com/docs/3/color_schemes.html) directly.

### Example

This is all that's needed to generate a great looking theme:

```ts
import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';

const settings: ISchemeSetting = {
    colors: {
        cursor: '#ffcc00',
        foreground: '#dedfe4',
        background: '#212339',
        comments: '#637777',
        blue: '#82aaff',
        brown: '#c17e70',
        cyan: '#86e1fc',
        green: '#c3e88d',
        orange: '#ff966c',
        pink: '#ff5874',
        purple: '#c099ff',
        red: '#ff757f',
        yellow: '#ffc777',
        deprecated: '#ffc777a1',
        invalid: '#d46c6c66',
        diffAdded: '#addb67',
        diffModified: '#e2b93d',
        diffDeleted: '#ef5350',
    },
    ui: {
        caret: "var(orange)"
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

generateScheme('My Scheme', 'Mauro Reis Vieira', 'My-Theme' settings);
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
