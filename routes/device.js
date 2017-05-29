var express = require('express');
var router = express.Router();

var db = require('./connection');
var devicedb = db.sublevel('device');
var sitedb = db.sublevel('site');

var device = [
    {
        id:1,
        mac: 91290391021,
        devicename:"A",
        siteid:"001"
       
    },
    {
        id:2,
        mac: 91290391022,
        devicename:"B",
        siteid:"001"
        
    },
    {
        id:3,
        mac: 91290391023,
        devicename:"C",
        siteid:"002"
      
    },
    {
        id:4,
        mac: 91290391024,
        devicename:"D",
        siteid:"002"
       
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
        if(err.message == "Key not found in database")
        {
            res.json({"success": true, "message": "no data" , "obj": []});
        }
        else
        {
              res.json(500,err);
        }
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

router.get('/device/getbysite/:_id',function(req,res)
{
    var id = req.params._id;
    var listitem = [];
    var sitename = {};
    sitedb.get('site',function(err,sites)
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
        else
        for(var i = 0 ; i < sites.length; i++)
        {
            var element = sites[i];
            if(element.id == id)
            sitename = element.sitename;
        }
        if(sitename != "")
        {
            devicedb.get('device',function(err,datadevice)
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
               
                 else
                  var index = 0;
                  var item = [];
                
                 for(var x = 0 ; x < datadevice.length; x++)
                 {
                    var element = datadevice[index];
                    if(element != null)
                    {
                    if(element.siteid == id)
                    {
                        var obj =  {};
                        
                        obj.sitename = sitename;
                        obj.id =element.id;
                        obj.siteid = element.siteid;
                        obj.mac = element.mac;
                        obj.devicename = element.devicename;
                        
                        item.push(obj);
                    }
                    }
                     index+=1;
                 }
                 if(index == datadevice.length)
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