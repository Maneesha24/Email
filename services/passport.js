const passport = require('passport');
const keys = require('../config/keys.js');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
	console.log('accessToken:', accessToken);
	console.log('refreshToken:', refreshToken);
	console.log('profile:', profile);
}));