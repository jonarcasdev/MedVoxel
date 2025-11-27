
--General tables 

CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL  
);

CREATE TABLE suppplier(
    supplier_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE user(
    user_id  SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    its_admin BOOLEAN NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    sale_price DECIMAL(10, 2) NOT NULL,
    bought_price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,

    CONSTRAINT fk_category
        FOREIGN KEY (fk_category_id)
        REFERENCES category(category_id),

    CONSTRAINT fk_suppplier
        FOREIGN KEY (fk_supplier_id)
        REFERENCES suppplier(supplier_id)
);

--Stock entering in the inventory 

CREATE TABLE purchase(
    purchase_id SERIAL PRIMARY KEY,
    date DATE,
    
    CONSTRAINT supplier_id
        FOREIGN KEY (fk_supplier_id)
        REFERENCES supplier(supplier_id),

    CONSTRAINT fk_user
        FOREIGN KEY (fk_user_id)
        REFERENCES user(user_id)
);

CREATE TABLE purchase_detail(
    purchase_detail_id SERIAL PRIMARY KEY,
    
    CONSTRAINT fk_purchase
        FOREIGN KEY (fk_purchase_id)
        REFERENCES purchase(purchase_id),

    CONSTRAINT fk_product
        FOREIGN KEY (fk_product_id)
        REFERENCES product(product_id),
    
    quantity INT NOT NULL CHECK (quantity > 0),
);

--Stock leaving the inventory

CREATE TABLE sale(
    sale_id SERIAL PRIMARY KEY,
    date DATE,
    
    CONSTRAINT fk_user
        FOREIGN KEY (fk_user_id)
        REFERENCES user(user_id)
);

CREATE TABLE sale_detail(
    sale_detail_id SERIAL PRIMARY KEY,
    
    CONSTRAINT fk_sale
        FOREIGN KEY (fk_sale_id)
        REFERENCES sale(sale_id),

    CONSTRAINT fk_product
        FOREIGN KEY (fk_product_id)
        REFERENCES product(product_id),
    
    quantity INT NOT NULL CHECK (quantity > 0)
);









