SELECT SUM(s.price * c.quantity) FROM blog_cart c JOIN blog_store s
ON c.product_id = s.product_id
WHERE c.user_id = 1 AND c.active = TRUE;