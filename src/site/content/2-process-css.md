---
title: Process CSS
---

It's likely you'll use some kind of CSS processing on a site.

This site will assume a Sass setup, but it could be all PostCSS, or Stylus and Autoprefixer, Tailwind and PurgeCSS and cssnano, etc.

### Principles

- Lint & Prettify authored files
- Commit only authored files to repo
- Concatenate & minify production code
- Create sourcemaps

### Relevant Tools

- Linting: [Stylelint](https://stylelint.io/)
- Code Formatting: [Prettier](https://prettier.io/)
- Preprocessors: [Sass](https://sass-lang.com/), [Less](http://lesscss.org/), and [Stylus](http://stylus-lang.com/).
- Preprocessors meant to run last like [PostCSS](https://github.com/postcss/postcss)/[Autoprefixer](https://github.com/postcss/autoprefixer)
- Minifiers: [cssnano](https://cssnano.co/), [clean-css](https://www.npmjs.com/package/clean-css), [uglifycss](https://www.npmjs.com/package/uglifycss), [csso](https://github.com/css/csso), or [node-minify](https://www.npmjs.com/package/node-minify).
- [Unused CSS](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) removers: [PurgeCSS](https://purgecss.com/), [PurifyCSS](https://github.com/purifycss/purifycss)
