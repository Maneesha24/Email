const requireLogin = require('../middlewares/requireLogin.js');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const requireCredits = require('../middlewares/requireCredits.js');

module.exports = app => {
	app.post('/api/surveys',requireLogin,requireCredits,(req,res,next) => {
		const {title, subject, body, recipients} = req.body;
		const survey = new Survey ({
			title : title,
			subject : subject,
			body,
			recipients : recipients.split(',').map(email => {return {email : email.trim()}}),
			_user : req.user.id,
			dateSent : Date.now()
		});
		
	});
}