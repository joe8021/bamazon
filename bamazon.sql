DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

use bamazon;


CREATE table IF NOT EXISTS products(
	item_id INT PRIMARY KEY auto_increment,
    product_name VARCHAR(20),
    department_name VARCHAR(20),
    price INT,
    stock_quantity INT
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES("Tape","Office",6,10),
    ("Socks","Clothing",7,10),
    ("Headphones", "Electronics",20,10),
    ("Paper", "Office", 2, 50),
    ("Book", "Office", 10, 5),
    ("Lamp", "Home", 22, 8),
    ("Shoes", "Clothing", 18, 3),
    ("Lawn Mower", "Outdoors", 30, 2),
    ("Rain Coat", "Clothing", 10, 10),
    ("Playstation", "Electronics", 50, 2);
    
    
    


