DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INTEGER(30) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(20),
  department_name VARCHAR(20),
  price DOUBLE(6,2),
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cat", "animal", 15.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog", "animal", 10.75, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("flowers", "gift", 6.25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camera", "technology", 59.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "technology", 329.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee", "food", 5.95, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("muffin", "food", 3.27, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "technology", 30.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("necklace", "gift", 15.00, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bird", "animal", 8.00, 20);

SELECT * FROM products;