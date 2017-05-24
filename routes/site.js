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
   sitedb.put('listlocation', site, function (err) {
   if (err) console.log('success put data initialization', err);
   else console.log('success put data initialization');
});


});


module.exports = router;


