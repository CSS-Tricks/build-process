---
title: Process JavaScript
---

You may want to preprocess your JavaScript, allowing for use of modern features that may not be supported in as many browsers as you'd like to support. But you may also want to split up your authored JavaScript for readability.

### Principals

- Only commit authored files to repo
- Concatenate & minify production code
- Create sourcemaps
- Code splitting (only load what is needed at the time)
- Tree shaking (remove unused code)

### Relevant Tools

- Linting: [ESLint](https://eslint.org/)
- Code Formatting: [Prettier](https://prettier.io/)
- Preprocessor: [Babel](https://babeljs.io/)
- Bundlers like [Rollup](https://github.com/rollup/rollup), [Parcel](https://parceljs.org/), and [webpack](https://webpack.js.org/).
- Post-install [Snowpack](https://www.snowpack.dev/).
