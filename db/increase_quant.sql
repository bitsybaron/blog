UPDATE blog_cart
SET quantity = quantity + 1
WHERE user_id = $1 AND product_id = $2 AND active = TRUE;

SELECT s.product_name, s.price, c.quantity, s.image, c.order_id, s.product_id
FROM blog_cart c JOIN blog_store s 
ON c.product_id = s.product_id
WHERE c.user_id = $1 AND c.active = true;