SELECT * FROM blog_cart
WHERE user_id = $1 AND active = FALSE;