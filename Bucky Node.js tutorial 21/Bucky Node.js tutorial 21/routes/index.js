var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Johannes node tutorial examples and notes' });
});

module.exports = router;