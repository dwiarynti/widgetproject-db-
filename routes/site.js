var express = require('express');
var router = express.Router();

var db = require('./connection');

var sitedb = require('site');

var site = [
    {
        id:"001",
        sitename :""
    },
    {
        id:"",
        sitename :""
    },
    {
        id:"",
        sitename :""
    } 
]

router.post('/site/Create/', function (req, res) {
    console.log(req.body.obj);
    widgetdb.put('listwidget', {
      obj : req.body.obj
    }, function (err) {
      if (err) res.json(500, err)
      else res.json({ success: true });
    })

});


module.exports = router;


