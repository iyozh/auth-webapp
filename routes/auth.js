const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/googleAuth')

router.get('/google',
    passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });

module.exports = router;