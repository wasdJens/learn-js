module.exports = {
  lintOnSave: "warning",
  chainWebpack: config => {
    config.module
      .rule("raw")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
