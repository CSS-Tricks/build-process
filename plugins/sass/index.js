module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      "node-sass src/site/_includes/css/main.scss src/site/css/main.css"
    );
  },
};
