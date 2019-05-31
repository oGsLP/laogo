module.exports={
  chainWebpack: config => {
    /* ... */

    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
      }
    } else {
    }
  }
};
