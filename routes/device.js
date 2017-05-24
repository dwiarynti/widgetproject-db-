var express = require('express');
var router = express.Router();

var db = require('./connection');
var devicedb = require('device');

var device = [
    {
        id:"",
        mac: "",
        devicename:"",
        peopleid :""
    },
    {
        id:"",
        mac: "",
        devicename:"",
        peopleid :""
    },
    {
        id:"",
        mac: "",
        devicename:"",
        peopleid :""
    },
    {
        id:"",
        mac: "",
        devicename:"",
        peopleid :""
    }
]