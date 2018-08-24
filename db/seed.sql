create table users (
    id serial primary key,
    username varchar(40),
    password text,
    picture text
)

create table posts (
    id serial primary key,
    title varchar(40),
    
)