-- auto-generated definition
create table ev_users
(
    id       int auto_increment
        primary key,
    username varchar(255) null,
    password varchar(255) null,
    nickname varchar(255) null,
    email    varchar(255) null,
    user_pic text         null
);


-- auto-generated definition
create table ev_article_cate
(
    id        int auto_increment
        primary key,
    name      varchar(255)  null,
    alias     varchar(255)  null,
    is_delete int default 0 null,
    constraint alias_UNIQUE
        unique (alias),
    constraint name_UNIQUE
        unique (name)
);


-- auto-generated definition
create table ev_articles
(
    id        int auto_increment
        primary key,
    title     varchar(45)       not null,
    content   varchar(255)      not null,
    cover_img text              not null,
    pub_date  varchar(45)       not null,
    state     varchar(45)       not null,
    is_delete tinyint default 0 not null,
    cate_id   int               not null,
    author_id int               not null
);

