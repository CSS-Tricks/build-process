function netlifyPlugin() {
  return {
    name: "my-first-plugin",
    onBuild: () => {
      console.log("Site has built!");
    }
  };
}

module.exports = netlifyPlugin;
