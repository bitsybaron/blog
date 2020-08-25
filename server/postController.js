module.exports = {
    getAllPosts: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.get_all_posts();
        res.status(200).send(posts)
    },
    getInterviewPosts: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.get_interview_posts();
        res.status(200).send(posts)
    }
}