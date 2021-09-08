// node src/server1.js
// http://localhost:5001/student

let express = require('express');
let app = express();

app.get('/students', function (request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    console.log("有人访问了server1");
    console.log('请求的资源是：', request.url);
    response.end(JSON.stringify(
        [
            {id:'001', name:'小沈阳', age: 18},
            {id:'002', name:'宋小宝', age: 28},
            {id:'003', name:'玛丽', age: 38}
        ]
    ));
});

let server = app.listen(5001, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("有人访问了server1");
})
    



// let server = app.listen(5001, function(){
//     let host = server.address().address
//     let port = server.address().port
//     log("有人访问了server1");
// })
    
// import http module
// let http = require("http");
// http.createServer(function (request, response){
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     // response.write('<head><meta charset="utf-8"/></head>');
//     log("有人访问了server1");
//     response.end(JSON.stringify({
//         name: 'server',
//         age: 2020
//     }));
// }).listen(5001);

