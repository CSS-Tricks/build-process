---
title: Process HTML
---

It's likely you'll need some kind of HTML processing to turn templates, layouts, partials, and data into full HTML documents you can use.

### Principles

- Commit only authored files in the repo
- Minify production HTML

### Relevant Tools

- With [Static Site Generators](https://serverless.css-tricks.com/services/ssgs) like [Eleventy](https://www.11ty.dev/), [Jekyll](https://jekyllrb.com/), and [Hugo](https://gohugo.io/) you handle this rather directly.
- With JavaScript Framework Site Generators like [Gatsby](https://www.gatsbyjs.org/), [Next](https://nextjs.org/), [Nuxt](https://nuxtjs.org/), [VuePress](https://vuepress.vuejs.org/), and [Gridsome](https://gridsome.org/), the HTML is created as part of piecing together components.
