CREATE TABLE blog_posts (
post_id SERIAL PRIMARY KEY, 
title VARCHAR(150), 
description VARCHAR(500),
image TEXT);

ALTER TABLE blog_posts 
ADD COLUMN content TEXT;

