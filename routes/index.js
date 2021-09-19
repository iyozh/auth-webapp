const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let username = req.user ? 1 : 2;
  res.render('index', { username: req.user ? req.user.displayName : "Anonymous"});
});

module.exports = router;
