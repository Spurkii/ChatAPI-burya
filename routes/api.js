var express = require('express');
var router = express.Router();
var fs = require('fs');

//-----------------------------------------------------Endpoints/Routers

// base route localhost:port/
app.get('/', function(req, res) {
    res.send("hello world!");
})

app.get('/test', function (req, res) {
    // json notation
    var message = { message: "this is json" };

    res.json(message);
})

app.get('/test/:name', function (req, res) {
    console.log('request params: ', req.params);
    var name = req.params.name;

    res.json({ message: name });
})

app.post('/test/:name', function (req, res) {
    console.log('request params: ', req.params);
    console.log('request body', req.body);
    var name = req.params.name;

    if (req.body.name == "mark") {
        res.status(200).json({message: "success" });
    } else {
        res.status(403).json({message: "access denied" });
    }
})
//get - retrieve an object
//post - creating new object
//patch/put - updating an object
//delete - deleting an object

// REST - representational state transfer
// get http://localhost:3000/api/users/15
//post http://localhost:3000/api/users/
// patch http://localhost:3000/api/users/15 (modify with json)
// delete http://localhost:3000/api/users/15 (no more user 15)

//-----------------------------------------------------Endpoints/Route