var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Node tutorial examples and notes',
        name: 'Johannes',
        videodata: vd
    });
});

module.exports = router;