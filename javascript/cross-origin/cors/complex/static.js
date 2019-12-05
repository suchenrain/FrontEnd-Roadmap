let express = require('express')
let app = express();
app.use(express.static(__dirname));

app.listen(3000, function () {
    console.log('static file at 3000')
})