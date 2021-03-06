DELETE FROM blog_cart
WHERE product_id = $1 AND active = TRUE AND user_id = $2;

SELECT s.product_name, s.price, c.quantity, s.image, c.order_id, s.product_id
FROM blog_cart c JOIN blog_store s 
ON c.product_id = s.product_id
WHERE c.user_id = $2 AND c.active = true
ORDER BY s.product_name DESC;