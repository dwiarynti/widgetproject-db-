var express = require('express');
var router = express.Router();

var db = require('./connection');
var devicedb = db.sublevel('device');

var device = [
    {
        id:1,
        mac: 91290391021,
        devicename:"A",
       
    },
    {
        id:2,
        mac: 91290391022,
        devicename:"B",
        
    },
    {
        id:3,
        mac: 91290391023,
        devicename:"C",
      
    },
    {
        id:4,
        mac: 91290391024,
        devicename:"D",
       
    }
]

router.post('/device/create', function (req, res) {
   devicedb.put('device', device, function (err) {
    if (err) res.json(500,err);
    else res.json({success: true});
});
});

router.get('/device/getall',function(req,res)
{
    devicedb.get('device',function(err,person)
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
      
        else res.json({"success": true, "obj":device})
    });
});

router.get('/device/:_id',function(req,res)
{
    var id = req.params._id;
    devicedb.get('device',function(err,datadevice)
    {
        if(err) 
        res.json(500,err);
        else 
       var item = {};
        for (var index = 0; index < datadevice.length; index++) {
        var element = datadevice[index];
        if (element.id == id) {
          item = element;
        }
        }
        res.json({"obj": item});
        
    });
});

module.exports = router;