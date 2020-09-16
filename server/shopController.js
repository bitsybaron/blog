
module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db');
        const products = await db.get_products();
       
        res.status(200).send(products)
    },
    addToCart: async (req, res) => {
        const db = req.app.get('db');
        const {userId, product_id} = req.body;
        
        const cart = await db.add_to_cart(userId, product_id);
        res.status(200).send(cart)
    },
    getCart: async (req, res) => {
        const db = req.app.get('db');
        const {userId} = req.params;
        const cart = await db.get_cart(userId);
        res.status(200).send(cart)
    },
    deleteItem: async (req, res) => {
        const db = req.app.get('db');
        const {product_id, userId} = req.params;
        
        const cart = await db.delete_cart_item([product_id, userId]);
        res.status(200).send(cart);
    },
    increase: async (req, res) => {
        const db = req.app.get('db');
        const {userId, product_id} = req.params;
       
        const cart = await db.increase_quant([userId, product_id]);
        res.status(200).send(cart);
    },
    getTotal: async (req, res) => {
        const db = req.app.get('db');
        const {userId} = req.params;
        const total = await db.total(userId);
        res.status(200).send(total)
    },
    decrease: async (req, res) => {
        const db = req.app.get('db');
        const {userId, product_id} = req.params;
        const cart = await db.decrease_quantity([userId, product_id]);
        res.status(200).send(cart);
    },
    cartQuant: async (req, res) => {
        const {userId} = req.params;
        const db = req.app.get('db');
        const quant = await db.cart_quantity(userId);
        res.status(200).send(quant)
    }


 }