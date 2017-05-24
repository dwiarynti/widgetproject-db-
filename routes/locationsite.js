var express = require('express');
var router = express.Router();

var db = require('./connection');
var locationdb = db.sublevel('locationsite');

var loc = [
    {
        id:"001",
        siteid:"001",
        locationname : "Anjungan A",
        zone : ""

    },
    {
        id:"002",
        siteid:"001",
        locationname : "Anjungan B",
        zone : ""
    },
    {
        id:"003",
        siteid:"003",
        locationname : "Anjungan A",
        zone : ""
    }
]

router.get('/locationsite/getall/:_id',function(req,res)
{
    var id = req.params._id;
    locationdb.get('locationsite',function(err,locations)
    {
        if (err) res.json(500,err);
        else 
        var itemlist = [];
        var index = 0;
        for(var i = 0 ; i < locations.length; i++)
        {
            var element = locations[i];
            if(element.siteid == id)
            itemlist.push(locations[i]);
            index+=1;
        }
        if(index == locations.length)
        {
        res.json({"obj": itemlist});
        }
    })
});

router.post('/locationsite/create',function(req,res)
{
    locationdb.put('locationsite', loc, function (err) {
    if (err) res.json(500,err);
    else res.json({success: true});
});
});

router.get('/locationsite/:_id',function(req,res)
{
    var id = req.params._id;
    locationdb.get('locationsite',function(err,locations)
    {
        if(err)
        res.json(500,err);
        else
        var item = {};
        for (var index = 0; index < locations.length; index++) {
        var element = locations[index];
        if (element.id == id) {
          item = element;
        }
      }
      res.json({"obj": item});

    })
});
module.exports = router;