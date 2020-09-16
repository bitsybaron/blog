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
        const cart = await db.complete_order([user_id, date]);
        res.status(200).send(cart)

        if (!charge) {
            throw new Error('unsuccessful charge')
        }
    
    }catch(error){
            console.log(error)
            res.status(500).send(error)
        }
        
    }, 
    orderHistory: async (req, res) => {
        const db = req.app.get('db');
        const {userId} = req.params;
        console.log(userId)
        const orders = await db.get_order_history(userId);
        console.log(orders);
        res.status(200).send(orders);


    }
}

