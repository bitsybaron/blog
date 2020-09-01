UPDATE blog_cart 
SET active = FALSE
WHERE user_id = $1;