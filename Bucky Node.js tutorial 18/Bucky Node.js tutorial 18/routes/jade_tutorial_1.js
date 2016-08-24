var express = require('express');
var router = express.Router();

/* GET jade tutorial page. */
router.get('/', function (req, res) {
    res.render('jade_tutorial_1', { });  //render *.jade, opt. send additional information
});

module.exports = router;