-- init.sql

-- Create a table for users
CREATE TABLE IF NOT EXISTS users (
    id integer primary key generated always as identity,
    username text,
    email text,
    password text
);

CREATE TABLE IF NOT EXISTS roles (
    id integer primary key generated always as identity,
    name text
);

-- Insert some initial data into the users table
INSERT INTO roles (name) VALUES 
    ('user'),
    ('admin'),
    ('mod');

-- Create a table for products
-- CREATE TABLE IF NOT EXISTS products (
--     product_id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     price NUMERIC(10, 2) NOT NULL,
--     description TEXT,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Insert some initial data into the products table
-- INSERT INTO products (name, price, description) VALUES
--     ('Laptop Pro', 1200.00, 'Powerful laptop for professionals.'),
--     ('Wireless Mouse', 25.50, 'Ergonomic wireless mouse.'),
--     ('Mechanical Keyboard', 99.99, 'Tactile and responsive mechanical keyboard.');

-- Add any other necessary tables, indexes, or data here
-- For example, you might create an index for faster lookups:
-- CREATE INDEX idx_users_email ON users (email);
