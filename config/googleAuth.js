const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('./mainConfig');

const HOSTNAME = config.app.host
const PORT = config.app.port

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: config.auth.googleClientID,
        clientSecret: config.auth.googleSecretKey,
        callbackURL: process.env.NODE_ENV === 'prod' ? `http://${HOSTNAME}/auth/google/callback` :
            `http://${HOSTNAME}:${PORT}/auth/google/callback`
    },
    function(accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));

module.exports = passport