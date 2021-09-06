module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        },
    },
    // lintOnSave: false,  // 关闭语法检查
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5001'
    // }
    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5001',
                // 重写URL：请求URL为http://localhost:8080/api/students 
                // 转发至： http://localhost:5001/students 
                pathRewrite: {'^/api':''}
                // ws: true,
                // changeOrigin: true
            },
            '/foo': {
                target: 'http://localhost:5002',
                pathRewrite: {'^/foo':''}
            }
        }
    }
}