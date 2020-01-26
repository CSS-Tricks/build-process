---
title: Optimize Images
---

Images are often the heaviest assets on any website, and are notoriously served under optimized, despite the fact that optimizing images isn't particularly difficult. Beyond optimization, serving the correct size and format image for the circumstance can go a long way.

### Principals

- Keep the highest quality images around (but not in repo itself)
- Optimize every single production image
- Use responsive image syntax in the HTML
- Lazy loading
- Serve the best image formats that are supported (e.g. create and serve `.webp` when possible)
- Use muted, autoplaying, looping `<video>` instead of GIFs

### Relevant Tools

- Optimizing raster images: [sharp](https://github.com/lovell/sharp) or [imagemin](https://github.com/imagemin/imagemin)
- Optimizing SVG images: [svgo](https://github.com/svg/svgo) for .svg
- APIs: [Imgix](https://docs.imgix.com/apis/url) [ImageOptim](https://imageoptim.com/api)
- Image hosting + API: [Cloudinary](https://cloudinary.com/)
