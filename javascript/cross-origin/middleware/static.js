let express = require('express')
let app = express();
app.use(express.static(__dirname));

app.listen(80, function () {
    console.log('static file at 80')
})