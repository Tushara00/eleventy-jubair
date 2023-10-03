module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy('./src/admin');
    return {
      passthroughFileCopy: true,
      markdownTemplateEngine: "njk",
      templateFormats: ["html", "njk", "md"],
      dir: {
        input: "src",
        output: "_site",
        include: "includes",    
      },
    };
  };