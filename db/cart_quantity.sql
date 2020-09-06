SELECT SUM(quantity) FROM blog_cart
WHERE user_id = $1 AND active = TRUE;