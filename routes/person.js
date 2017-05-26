var express = require('express');
var router = express.Router();

var db = require('./connection');
var persondb = db.sublevel('person');
var sitedb = db.sublevel('site');

var person = [
    {
        id:1,
        name:"Budi",
        siteid:"001"
    },
    {
        id:2,
        name:"Anton",
        siteid:"001"
    },
    {
        id:3,
        name:"Didi",
         siteid:"002"
    },
     {
        id:4,
        name:"Ani",
        siteid:"002"
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

router.get('/person/getbysite/:_id',function(req,res)
{
    var id = req.params._id;
    var listitem = [];
    var sitename = {};
    sitedb.get('site',function(err,sites)
    {
        if(err) res.json(500,err);
        else
        for(var i = 0 ; i < sites.length; i++)
        {
            var element = sites[i];
            if(element.id == id)
            sitename = element.sitename;
        }
        if(sitename != "")
        {
            persondb.get('person',function(err,dataperson)
            {
                 if(err) res.json(500,err);
               
                 else
                  var index = 0;
                  var item = [];
                
                 for(var x = 0 ; x < dataperson.length; x++)
                 {
                    var element = dataperson[index];
                    if(element != null)
                    {
                    if(element.siteid == id)
                    {
                        var obj =  {};
                        
                        obj.sitename = sitename;
                        obj.id =element.id;
                        obj.siteid = element.siteid;
                        obj.name = element.name;
                        
                        item.push(obj);
                    }
                    }
                     index+=1;
                 }
                 if(index == dataperson.length)
                 {
                    res.json({"obj": item })
                 }
               

            });
        }
        else
        {
            res.json(500,err);
        }
    });


});
module.exports = router;