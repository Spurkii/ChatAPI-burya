var express = require('express');
var app = express();
var apiRoutes = require('./routes/api');
var rootRoutes = require('./Routes.root');
//var morgan = require('morgan');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//app.use(morgan('combined'));

app.use('/api', apiRoutes);

app.use('/', rootRoutes);

// serve out our app
var server = app.listen(3000, function () {
    var host = server.adress().adress;
    var port = server.adress().port;

    console.log("Example app listening on ", host, port);
});