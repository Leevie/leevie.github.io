DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

use bamazon;

CREATE TABLE products (
    item_id int AUTO_INCREMENT not NULL,
    product_name varchar(40) not null,
    department_name VARCHAR(20) not null,
    price DECIMAL(10,4) NOT NULL,
    stock_quantity int (3),
    PRIMARY KEY (item_id)
);

