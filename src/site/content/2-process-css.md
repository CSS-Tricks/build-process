---
title: Process CSS
---

It's likely you'll use some kind of CSS processing on a site.

You likely need to process your CSS as you develop. This site will assume a Sass setup, but it could be all PostCSS, or Stylus and Autoprefixer, Tailwind and PurgeCSS and cssnano, etc.

The main point is to not commit the processed/minified files to the repo. They are useless there, creating noisy commits.

### Principles

- Lint & Prettify authored files
- Commit only authored files to repo
- Concatenate & minify production CSS
- Create sourcemaps

### Relevant Tools

- Lint with Stylelint
- Prettify with Prettier
- Preprocessors like Sass, Less, and Stylus.
- Preprocessors meant to run last, like PostCSS/Autoprefixer
- Minifiers like [cssnano](https://cssnano.co/), [clean-css](https://www.npmjs.com/package/clean-css), [uglifycss](https://www.npmjs.com/package/uglifycss), [csso](https://github.com/css/csso), or [node-minify](https://www.npmjs.com/package/node-minify).
- [Unused CSS](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) tools like [PurgeCSS](https://purgecss.com/), [PurifyCSS](https://github.com/purifycss/purifycss)
