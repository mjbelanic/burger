drop database if exists burger_db;

create database burger_db;

use burger_db;

CREATE TABLE burgers(
    id integer(11) PRIMARY KEY auto_increment,
    burger_name nvarchar(100),
    devoured boolean,
    date datetime
);

-- Insert Stored Procedure
-- DELIMITER // 
--  CREATE PROCEDURE Put_Burgers( IN burgerStr varchar(100), IN devouredBool boolean)
--    BEGIN
--    INSERT INTO burgers ( burger_name, devoured, date) 
--     VALUES( in_burgerStr, in_devouredBool , NOW());
--    END //
--  DELIMITER ;