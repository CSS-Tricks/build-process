---
title: Optimize Images
---

### Principals

- Keep highest quality images around (but probably not in repo itself)
- Optimize every single production image
- Use responsive image and lazy load syntax in production HTML
- Serve the best image formats that are supported (e.g. create and serve .webp when possible)
- Use muted, autoplaying, looping `<video>` instead of GIFs

### Relevant Tools

- [sharp](https://github.com/lovell/sharp) or [imagemin](https://github.com/imagemin/imagemin) for raster images
- [svgo](https://github.com/svg/svgo) for .svg
- APIs like [Imgix](https://docs.imgix.com/apis/url), or [ImageOptim](https://imageoptim.com/api)
- [Cloudinary](https://cloudinary.com/) to host and serve optimized images
