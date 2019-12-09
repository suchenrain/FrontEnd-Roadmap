var express = require('express')
var proxy = require('http-proxy-middleware')
var app = express();

app.use('/', proxy({

    target: 'http://www.domain2.com:8080',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyReq: function (proxyRes, req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://www.domain1.com');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    },

    // 修改响应中的cookie域
    cookieDomainRewrite: 'www.domain1.com' // false 为不修改
}))

app.listen(81, () => {
    console.log('Proxy server is running at port 81...')
})