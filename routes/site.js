var express = require('express');
var router = express.Router();

var db = require('./connection');

var sitedb = db.sublevel('site');

var site = [
    {
        id:"001",
        sitename :"A"
    },
    {
        id:"002",
        sitename :"B"
    },
    {
        id:"003",
        sitename :"C"
    } 
]

router.post('/site/Create/', function (req, res) {
   sitedb.put('site', site, function (err) {
   if (err) console.log('gagal', err);
   else console.log('success put data initialization');
});
});

router.get('/site/getall',function(req,res)
{
   
    sitedb.get('site',function(err,locations)
    {
        if (err) res.json(500,err);
        else 
        
        res.json({"obj": locations});
    })
});



module.exports = router;


