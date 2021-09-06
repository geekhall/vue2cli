// node src/server2.js
// http://localhost:5002/car

let express = require('express');
let app = express();
let fs = require('fs');
const log = console.log;

app.get('/car', function (request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    log("有人访问了server2");
    response.end(JSON.stringify({
        name: 'car',
        age: 2020
    }));
});

let server = app.listen(5002, function(){
    let host = server.address().address
    let port = server.address().port
    log("有人访问了server2");
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

