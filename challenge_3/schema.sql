DROP DATABASE IF EXISTS signups;

CREATE DATABASE signups;

USE signups;

CREATE TABLE all_users (
    id int not null AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    line1 varchar(255),
    line2 varchar(255),
    city varchar(255),
    state varchar(255),
    zip varchar(255),
    cc varchar(255),
    expiry varchar(255),
    cvv varchar(255),
    billing_zip varchar(255),
    PRIMARY KEY (id)
);

