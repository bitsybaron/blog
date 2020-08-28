UPDATE blog_cart
SET quantity = quantity + 1
WHERE user_id = $1 AND product_id = $2 AND active = TRUE

SELECT * FROM blog_cart
WHERE user_id = $1;