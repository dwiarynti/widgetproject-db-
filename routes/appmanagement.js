var express = require('express');
var router = express.Router();

var db = require('./connection');

var appmanagementdb = db.sublevel('appmanagement');
var sequencedb = db.sublevel('sequencenumber');

router.post('/appmanagement/create',function(req,res)
{
    var sequenceno = "";
    sequencedb.get('sequencenumber',function(err,no)
    {
        if (err) 
        if(err.message == "Key not found in database")
        {
            var no = 0;
            sequencedb.put('sequencenumber',no,function(err,no)
            {   
                if(err) res.json(500,err)
                else sequenceno = no+1;
            });
        }
        else
        {
        res.json(500,err);
        }
        else
        sequenceno = no+1;
      
        if(sequenceno != "")
        {
           var app = {
               "id" : sequenceno,
               "pagename" : req.body.pagename,
               "pagestatus" : req.body.pagestatus,
               "widget" : []
           }
           var listobj = [];
            appmanagementdb.get('appmanagement',function(err,obj)
            {
                if(err) res.json(500,err)
                else
                listobj.push(obj);
                listobj.push(app);
                appmanagementdb.put('appmanagement',listobj,function(err,data)
                {
                    if(err) res.json(500,err);
                    else 
                    sequencedb.put('sequencenumber',sequenceno,function(err,no)
                    {   
                        if(err) res.json(500,err)
                        else
                        res.json({"success":true})
                    });
                    
                })
            })
           
        }

    });
})

router.get('/appmanagement/getall',function(req,res)
{
    appmanagementdb.get('appmanagement',function(err,management)
    {
        if(err) 
        if(err.message == "Key not found in database")
        {
            res.json({"success": true, "message": "no data"});
        }
        else
        {
              res.json(500,err);
        }
      
        else res.json({"success": true, "obj":management})
    });
})

module.exports = router;