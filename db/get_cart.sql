SELECT s.product_name, s.price, c.quantity, s.image, c.order_id, s.product_id
FROM blog_cart c JOIN blog_store s 
ON c.product_id = s.product_id
WHERE c.user_id = $1 AND c.active = true;

-- SELECT s.product_name, SUM(c.quantity) 
-- FROM blog_cart c JOIN blog_store s 
-- ON c.product_id = s.product_id
-- WHERE c.user_id = $1 AND c.active = true
-- GROUP BY s.product_name; 

-- SELECT s.image, c.order_id FROM blog_cart c
-- JOIN blog_store s
-- ON c.product_id = s.product_id
-- WHERE c.user_id = $1 AND c.active = true;