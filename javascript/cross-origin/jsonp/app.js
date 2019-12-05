let express = require('express')
let app = express()

app.get('/say', function (req, res) {
    let { wd, cb } = req.query
    console.log(wd)
    console.log(cb)
    res.end(`${cb}('我不爱你')`)
})
var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})