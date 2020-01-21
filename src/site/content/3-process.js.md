---
title: Process JavaScript
---

You may want to preprocess your JavaScript, allowing for use of modern features that may not be supported in as many browsers as you'd like to support. But you may also want to split up your authored JavaScript for readability.

### Principals

- Only commit authored files to Repo
- Sourcemaps
- Concatenate & minify production JavaScript
- Code splitting & tree shaking

### Relevant Tools

- Babel
- Bundlers like [Rollup](https://github.com/rollup/rollup), [Parcel](https://parceljs.org/), and [webpack](https://webpack.js.org/).
- Post-install one-time package usage with [Snowpack](https://www.snowpack.dev/).
