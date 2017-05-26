var express = require('express');
var router = express.Router();

var db = require('./connection');
var persondb = db.sublevel('person');

var person = [
    {
        id:1,
        name:"Budi",
    },
    {
        id:2,
        name:"Anton",
    },
    {
        id:3,
        name:"Didi",
    },
     {
        id:4,
        name:"Ani",
    }
]


router.get('/person/getall',function(req,res)
{
    persondb.get('person',function(err,person)
    {
        if(err) 
        if(err.message == "Key not found in database")
        {
            res.json({"success": true, "message": "no data" , "obj": []});
        }
        else
        {
              res.json(500,err);
        }
      
        else res.json({"success": true, "obj":person})
    });
});

router.get('/person/:_id',function(req,res)
{
    var id = req.params._id;
    persondb.get('person',function(err,person)
    {
        if(err) 
        res.json(500,err);
        else 
       var item = {};
        for (var index = 0; index < person.length; index++) {
        var element = person[index];
        if (element.id == id) {
          item = element;
        }
        }
        res.json({"obj": item});
        
    });
});

router.post('/person/create', function (req, res) {
   persondb.put('person', person, function (err) {
    if (err) res.json(500,err);
    else res.json({success: true});
});
});
module.exports = router;