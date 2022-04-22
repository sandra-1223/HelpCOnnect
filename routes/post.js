const express = require('express');
var router = express.Router();
const mysql = require('mysql');
var connection  = require('../database.js');

const app = express();


router.get('/ngo_post', function(req, res) {
  console.log("Test2");
    var sql='SELECT * FROM ngo_post';
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('post', { title: 'post', postData: data});
  });
});
module.exports = router;
