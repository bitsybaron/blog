DELETE FROM blog_cart
WHERE product_id = $1 AND active = TRUE AND user_id = $2;