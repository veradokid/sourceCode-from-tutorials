var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', myName: 'Johannes' });  //render index.jade, send additional information
});

module.exports = router;