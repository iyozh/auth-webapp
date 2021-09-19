const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const credentials = require('./mainConfig');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: credentials.auth.googleClientID,
        clientSecret: credentials.auth.googleSecretKey,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));

module.exports = passport