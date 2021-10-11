var express = require('express');
var router = express.Router();


//----------------------------------------------------Endpoints/Routers


router.get('/',function(req,res){
    res.send('root');
});


//----------------------------------------------------Endpoints/Routers

module.exports = router;