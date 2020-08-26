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

CREATE TABLE blog_cart (
order_id SERIAL PRIMARY KEY, 
product_id1 INT REFERENCES blog_store(product_id), 
quant1 INT, 
product_id2 INT REFERENCES blog_store(product_id), 
quant2 INT);

CREATE TABLE blog_users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(300),
    password VARCHAR(300)
);