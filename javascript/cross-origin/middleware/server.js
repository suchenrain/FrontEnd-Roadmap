var express = require('express')
var app = express();
var qs = require('querystring')

app.use(function (req, res, next) {
    var params = qs.parse(req.url.substring(2));

    res.setHeader('Set-Cookie', 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly')
    res.write(JSON.stringify(params));
    res.end();
})

app.listen(8080, () => {
    console.log('Server is running at port 8080...')
})