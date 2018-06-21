const express = require('express');
const passport = require('passport');
const keys = require('./config/keys.js');

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


const app = express();

app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/', (req, res) => {
	res.send({
		hi: "batman & JOKER"
	});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
