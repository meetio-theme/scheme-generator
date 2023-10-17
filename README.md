# Sublime Text Scheme Generator

Are you tired of the same old color schemes in Sublime Text? Look no further!
Our repository offers a powerful and user-friendly solution to spice up your coding environment.

Introducing an innovative tool designed to effortlessly generate custom color schemes tailored to your preferences.

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

In addition to the base settings, `SchemeSetting` provides more options for `colors`, `ui`, `rules`.
There is also an overrides property, which allows you to set any color key from the [Color Scheme Reference](https://www.sublimetext.com/docs/3/color_schemes.html) directly.

## Features

- **Effortless Customization:** Generate custom color schemes tailored to your preferences with ease.
- **Intuitive Interface:** User-friendly tools to craft visually appealing themes without any hassle.
- **Versatile Settings:** Fine-tune colors, UI elements, and syntax rules for a perfect match to your coding style.
- **Simplified Installation:** Seamless integration into your Sublime Text setup using NPM or Yarn.
- **Wide Language Support:** Explicit support for popular languages like CSS, HTML, JavaScript, and more.
- **External Plugin Compatibility:** Enhanced experience with plugins like BetterFindBuffer.

## Usage

This is all that's needed to generate a great looking theme:

```ts
import { generateScheme, rules, ui } from '@meetio/scheme-generator';
import { SchemeSetting, UI } from '@meetio/scheme-generator/dist/types';

const colorPalette = {
    accent: '#80CBC4',
    cursor: '#FFCC00',
    foreground: '#EEFFFF',
    background: '#263238',
    comments: '#546E7A',
    deprecated: '#FFC777A1',
    invalid: '#D46C6C66',
    diffAdded: '#ADDB67',
    diffModified: '#E2B93D',
    diffDeleted: '#EF5350',
};

const uiSettings: UI = {
    line_diff_width: '3',
    brackets_options: 'underline, glow',
};

const mergedRules = Object.values(rules).flatMap((rule) => rule);

const settings: SchemeSetting = {
    colors: colorPalette,
    ui: {
        ...ui,
        ...uiSettings,
    },
    rules: mergedRules,
};

generateScheme({
    name: 'Scheme Example',
    author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
    output: {
        filename: 'Scheme Example',
    },
    settings,
});
```

## Support

Support below means that the standard Sublime Text grammar has explicit support for the languages.
Other languages will probably still look alright but there is no guarantee that they will.

-   CSS/SASS/SCSS
-   HTML
-   JSON
-   JavaScript/JSX
-   TypeScript/TSX
-   Markdown
-   SQL
-   PHP
-   Python
-   YAML
-   Vue
-   Git

## External Plugins Support

-   [BetterFindBuffer](https://github.com/aziz/BetterFindBuffer)

### Development

```bash
# Using NPM
npm run watch

# Using Yarn
yarn run watch
```

> Project inspired on [code-theme-generator](https://github.com/moxer-theme/code-theme-generator) for VSCode.
