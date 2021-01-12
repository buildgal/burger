CREATE DATABASE burgers_db

### Schema 

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
    id AUTO INT NOT NULL, 
    burger_name VARCHAR (250),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
    
);