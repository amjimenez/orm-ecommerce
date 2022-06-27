-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE TABLES
CREATE TABLE `ecommerce_db`.`category` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(255) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `ecommerce_db`.`product` (
   `id` INT unsigned NOT NULL AUTO_INCREMENT,
   `category_id` INT unsigned NOT NULL,
   `product_name` VARCHAR(255) NOT NULL DEFAULT '',
   `price` DECIMAL(10,2) NOT NULL,
   `stock` INT unsigned NOT NULL DEFAULT 10,
   PRIMARY KEY (`id`),
   CONSTRAINT `category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `ecommerce_db`.`tag` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `tag_name` VARCHAR(255) NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `ecommerce_db`.`product_tag` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `product_id` INT unsigned NOT NULL,
    `tag_id` INT unsigned NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `tag_id_fk` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB;