DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;

create table users
{
    id int not null auto_increment,
    fullName varchar(100) not null,
    email varchar(75) not null,
    password varchar(20) not null,
    primary key(id)
}

create table recipes
{
    id int not null auto_increment,
    userid int not null,
    uri_recipe varchar(1024) not null,
    uri_wine varchar(1024) not null,
    isFavorite boolean default false,
    primary key(id),
    foreign key (userid) references user(id) on delete cascade
}
