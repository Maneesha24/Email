const keys = require('../config/keys.js');
const Stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) =>{
	app.post('/api/stripe',(req,res)=>{
		console.log(req.body);
	});
}