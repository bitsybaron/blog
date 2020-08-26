INSERT INTO blog_users (name, email, password)
VALUES 
($1, $2, $3)

RETURNING *;