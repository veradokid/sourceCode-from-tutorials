var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function (req, res) {
    res.render('about', { });  //render index.jade, opt. send additional information as variable/data pairs.
});

module.exports = router;