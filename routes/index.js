var express = require('express');
var router = express.Router();
var cd = require('../costs_list.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
      costdata: cd
  });
});

module.exports = router;
