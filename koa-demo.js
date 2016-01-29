var fs = require('fs');
var koa = require('koa');

var app = koa();
var jsonObj = JSON.parse(fs.readFileSync('./package.json','utf-8'));
//x-response time

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time',ms + 'ms')
    console.log('%s %s - %s', this.method, this.url, ms); //logger
});


app.use(function* (){
    this.body = JSON.stringify(jsonObj,null,3);
});

console.log('initiatied');
app.listen(3000);