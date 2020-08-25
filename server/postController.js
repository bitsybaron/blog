module.exports = {
    getAllPosts: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.get_all_posts();
        res.status(200).send(posts)
    },
    getFilteredPosts: async (req, res) => {
        const db = req.app.get('db');
        const {tags} = req.params
        const posts = await db.get_filtered_posts(tags);
        res.status(200).send(posts)
    }
}