const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { username: req.user.displayName ? req.user.displayName : "Anonymous"});
});

module.exports = router;
