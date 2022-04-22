const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var connection  = require('../database.js');

const app = express();


router.get('/sh_request', function(req, res) {
  console.log("Test1");
    var sql='SELECT * FROM sh_request';
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('request', { title: 'request', requestData: data});
  });
});
module.exports = router;
