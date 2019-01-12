DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;

create table users
{
    id int not null auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(255) not null,
    password varchar(20) not null,
    primary key(id)
}

create table recipes
{
    id int not null auto_increment,
    userid int not null,
    receipe_url varchar(1024) not null,
    wine_pairing varchar(1024),
    isFavorite boolean default false,
    primary key(id),
    foreign key (userid) references user(id) 
}