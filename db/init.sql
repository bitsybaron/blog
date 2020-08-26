CREATE TABLE blog_posts (
post_id SERIAL PRIMARY KEY, 
title VARCHAR(150), 
description VARCHAR(500),
image TEXT);

ALTER TABLE blog_posts 
ADD COLUMN content TEXT;

CREATE TABLE blog_store (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(160),
price INT,
product_type VARCHAR(160));

ALTER TABLE blog_store
ADD COLUMN product_details TEXT;

