// node src/server2.js
// http://localhost:5002/cars

let express = require('express');
let app = express();

app.get('/cars', function (request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    console.log("有人访问了server2");
    console.log('请求的资源是：', request.url);
    response.end(JSON.stringify(
        [
            {id:'001', name:'Tesla'},
            {id:'002', name:'BMW'},
            {id:'003', name:'Benz'}
        ]
    ));
});

let server = app.listen(5002, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("有人访问了server2");
})
    

    
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

