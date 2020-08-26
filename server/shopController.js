module.exports = {
    getProducts: async (req, res) => {
        const db = req.app.get('db');
        const products = await db.get_products();
        console.log(products);
        res.status(200).send(products)
    }
}