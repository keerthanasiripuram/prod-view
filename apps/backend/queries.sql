-- Create the products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    category VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    stock INTEGER NOT NULL,
    image TEXT
);

-- Insert data into the products table
INSERT INTO products (
    id, title, description, category, price, rating, stock, image
) VALUES
    (1, 'ABC', 'ABC Description', 'Electronics', 22.00, 2.0, 2, 'image1.jpg'),
    (2, 'XYZ', 'XYZ Description', 'Clothing', 45.50, 4.5, 10, 'image2.jpg'),
    (3, 'chicken', 'chicken', 'Groceries', 150.75, 3.8, 5, 'uploads/chicken.png'),
    (4, 'fish', 'Fish', 'Groceries', 12.99, 4.9, 20, 'uploads/fish.png');





