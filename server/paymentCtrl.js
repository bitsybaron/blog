const {STRIPE_SECRET} = process.env;
const stripe = require('stripe')(STRIPE_SECRET);

module.exports = {
    chargeCustomer: async (req, res) => {
        // console.log(req.body)
        try{
        const {amount, token, user_id, date} = req.body;
        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: token.id,
            description: 'Test charge'
        })

        const db = req.app.get('db')
        const cart = await db.complete_order(user_id)
        console.log(cart);
        res.status(200).send(cart)

        if (!charge) {
            throw new Error('unsuccessful charge')
        }
    
    }catch(error){
            console.log(error)
            res.status(500).send(error)
        }
        
    }, 
}

