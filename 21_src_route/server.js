const express = require('express')

const app = express()
app.use(express.static(__dirname + '/static'))

// http://localhost:5005/person
app.get('/person', (req, res )=>{
    res.send({
        name: 'tom',
        age: 18
    })
})

// node server.js
app.listen(5005, (err)=> {
    if(!err) console.log('服务器启动成功了！')
})