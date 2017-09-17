drop database if exists burger_db;

create database burger_db;

use burger_db;

CREATE TABLE burgers(
    id integer(11) PRIMARY KEY auto_increment,
    burger_name nvarchar(100),
    devoured boolean,
    date datetime
);