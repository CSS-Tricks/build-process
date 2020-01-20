const util = require("util");

module.exports = function(eleventyConfig) {
  // a debug utility
  eleventyConfig.addFilter("dump", obj => {
    return util.inspect(obj);
  });

  // alias
  eleventyConfig.addLayoutAlias("default", "layouts/base.njk");

  // compress and combine js files
  eleventyConfig.addFilter("jsmin", require("./src/utils/minify-js.js"));

  // minify the html output when running in prod
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform(
      "htmlmin",
      require("./src/utils/minify-html.js")
    );
  }

  // Collections
  eleventyConfig.addCollection("processes", function(collection) {
    return collection.getFilteredByGlob("./src/site/content/*.md");
  });

  // Passthrough
  // eleventyConfig.addPassthroughCopy("./src/site/fonts");
  eleventyConfig.addPassthroughCopy("./src/site/images");
  eleventyConfig.addPassthroughCopy("./src/site/css");

  return {
    dir: {
      input: "src/site",
      inludes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
