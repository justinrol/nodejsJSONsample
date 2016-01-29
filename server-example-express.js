var express = require('express');
var app = express();

console.log("simple server initiated\n")
app.use(express.static(__dirname));

app.listen(3000);
