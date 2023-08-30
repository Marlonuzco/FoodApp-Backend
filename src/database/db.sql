//crear tabla de usuarios
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  profileimage VARCHAR(200),
  createdAt TIMESTAMP DEFAULT NOW() NOT NULL,
  updatedAt TIMESTAMP DEFAULT NOW() NOT NULL
);

//crear tabla categories
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  photo VARCHAR(255),
)

//crear tabla products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    photo VARCHAR(255),
    incart BOOLEAN NOT NULL,
    counter INT NOT NULL,
    category_id INT REFERENCES categories(id)
);

CREATE TABLE populars (
	id SERIAL PRIMARY KEY,
	product_id INT REFERENCES products(id)
);