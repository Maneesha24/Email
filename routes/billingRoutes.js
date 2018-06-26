const keys = require('../config/keys.js');
const Stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) =>{
	app.post('/api/stripe',async (req,res)=>{
		const charge = await stripe.charges.create({
			amount : 500,
			currency : 'usd',
			description : '5$ for 5 emails',
			source : req.body.id
			
		});
		console.log(charge);
	});
}