const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      "/api": {
        // target: 'http://localhost:5001/api/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        // ws: true,
        // changOrigin: true,//允许跨域
        // pathRewrite: {
        //   "^/api": "" //请求的时候使用这个api就可以
        // }
      }
    }
  },
  chainWebpack: config => {
    //修改文件引入自定义路径
    config.resolve.aliass
      .set("@", resolve("src"))
      .set("@STYLE", resolve("src/assets/stylesheets"))
      .set("@COM", resolve("src/components"))
      .set("@VIEW", resolve("src/views"));
  }
};
