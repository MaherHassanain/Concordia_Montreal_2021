//===========================================================================
//						search.js
//				  Developed by Maher Hassanain
//						 June 2020
//===========================================================================
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('literature', { title: 'Literature' });
});



module.exports = router;