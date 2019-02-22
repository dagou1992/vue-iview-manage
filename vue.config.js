module.exports = {
    devServer: {
        port: 8088, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: 'http://127.0.0.1:8092' // 配置跨域处理,只有一个代理
    }
};