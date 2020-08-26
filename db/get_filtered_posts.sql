SELECT * FROM blog_posts
WHERE tags = $1
ORDER BY post_id DESC;