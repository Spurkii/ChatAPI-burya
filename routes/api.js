var express = require('express');
var router = express.Router();
var fs = require('fs');



//---------------------------------------------------------------Endpoints/Routers


router.get('/Halo',function(req,res){
    try{
        var rawdata = fs.readFileSync('Halo.json'); 
        
        var Users = JSON.parse(rawdata);
       
        console.log(Users);
    
        res.status(200).json({message: Users});
        
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

router.get('/Star_Wars',function(req,res){
    try{
        var rawdata = fs.readFileSync('Star_Wars.json'); 
       
        var Users = JSON.parse(rawdata);
       
        console.log(Users);
    
        res.status(200).json({message: Users});
   
    } catch (err){
        res.status(500).json({message: err.message});
    }
    
});
router.post('/Star_Wars', function(req,res){
    try{
        console.log("Posted Object is: ", req.body);
        
        const rawdata = fs.readFileSync('Star_Wars.json');
       
        var Users = JSON.parse(rawdata);
       
        var rawbody = req.body;

        var newObj = 
        {
            name: null,
            Text: null,
            Time: Date.now()
        };
        if(rawbody.Forum != null)
        {
            newObj.Forum= rawbody.Forum;
        };
        if(rawbody.name != null)
        {
        newObj.name = rawbody.name;
        };
        if(rawbody.Text != null)
        {
            newObj.Text= rawbody.Text;
        };

        newObj._id = Users.length;     
        
        Users.push(newObj);
        
        const data = fs.writeFileSync('Star_Wars.json', JSON.stringify(Users));

        res.status(201).json(newObj);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});
router.post('/Halo', function(req,res){
    try{
        console.log("Posted Object is: ", req.body);
        
        const rawdata = fs.readFileSync('Halo.json');
        
        var Users = JSON.parse(rawdata);
        
        var rawbody = req.body;

        var newObj = 
        {
            name: null,
            Text: null,
            Time: Date.now()
        };
        if(rawbody.Forum != null)
        {
            newObj.Forum= rawbody.Forum;
        };
        if(rawbody.name != null)
        {
        newObj.name = rawbody.name;
        };
        if(rawbody.Text != null)
        {
            newObj.Text= rawbody.Text;
        };

        newObj._id = Users.length;     
        
        Users.push(newObj);
        
        const data = fs.writeFileSync('Halo.json', JSON.stringify(Users));

        res.status(201).json(newObj);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});
router.patch('/Star_Wars/:id', function(req,res){
    try{
        console.log("Object being patched is: ",req.params.id, req.body);
        
        const rawdata = fs.readFileSync('Star_Wars.json');
       
        var Users = JSON.parse(rawdata);
        
        var id = req.params.id;
       
        var rawbody = req.body;

        if(rawbody.name != null)
        {
            Users[id].name = rawbody.name;
        };
        if(rawbody.Text != null)
        {
            Users[id].Text = rawbody.Text;
        };
        if(rawbody.Time != null)
        {
            Users[id].Time = Date.now();
        }

        Users[id]._id = Users.length;
        const data = fs.writeFileSync('Star_Wars.json', JSON.stringify(Users));

        res.status(200).json(Users[id]);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});
router.patch('/Halo/:id', function(req,res){
    try{
        console.log("Object being patched is: ",req.params.id, req.body);
       
        const rawdata = fs.readFileSync('Halo.json');
       
        var Users = JSON.parse(rawdata);
       
        var id = req.params.id;
       
        var rawbody = req.body;

        if(rawbody.name != null)
        {
            Users[id].name = rawbody.name;
        };
        if(rawbody.Text != null)
        {
            Users[id].Text = rawbody.Text;
        };
        if(rawbody.Time != null)
        {
            Users[id].Time = Date.now();
        }

        Users[id]._id = Users.length;
        const data = fs.writeFileSync('Halo.json', JSON.stringify(Users));

        res.status(200).json(Users[id]);

    } catch (err){
        res.status(500).json({message: err.message});
    }
});
router.delete('/Star_Wars/:id', function(req,res){

    var id = req.params.id

    var rawdata = fs.readFileSync('Star_Wars.json');

        var Users = JSON.parse(rawdata);

    if(Users.length > id) {

        Users.splice(id,1);

        const data = fs.writeFileSync('Star_Wars.json', JSON.stringify(Users));

        res.status(200).json({message:"ok"});
        
    }
    else
    {
        res.status(500).json({message: "An error occurred"});
    }
    
});
router.delete('/Halo/:id', function(req,res){

    var id = req.params.id

    var rawdata = fs.readFileSync('Halo.json');

        var Users = JSON.parse(rawdata);

    if(Users.length > id) {

        Users.splice(id,1);

        const data = fs.writeFileSync('Halo.json', JSON.stringify(Users));

        res.status(200).json({message:"ok"});
        
    }
    else
    {
        res.status(500).json({message: "An error occurred"});
    }
    
});
//get - retrieve an object
//post - creating an object
//patch/put - updating an object
//delete - delete an object
//git pull, git push





//------------------------------------------------------------------------endpoints/routers

module.exports = router;