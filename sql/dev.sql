USE sys;
DROP DATABASE IF EXISTS hanghae_blog;
CREATE DATABASE IF NOT EXISTS hanghae_blog;
USE hanghae_blog;

DROP TABLE IF EXISTS post_like_list;
DROP TABLE IF EXISTS comment_like_list;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (

    nickname    VARCHAR(50)     NOT NULL    PRIMARY KEY,
    password    VARCHAR(40)     NOT NULL
    
);

CREATE TABLE IF NOT EXISTS post (

    post_id     SERIAL          NOT NULL    PRIMARY KEY,
    author      VARCHAR(50)     NOT NULL	REFERENCES user (nickname),
    title       VARCHAR(100)    NOT NULL,
    context     VARCHAR(300)    NOT NULL

);

CREATE TABLE IF NOT EXISTS post_like_list (

	post_like_list	SERIAL			PRIMARY KEY,
    post_id     	INTEGER         NOT NULL	REFERENCES post(post_id),
    like_list   	JSON
    
);

CREATE TABLE IF NOT EXISTS comment (

    comment_id  		SERIAL          NOT NULL 	PRIMARY KEY,
    author      		VARCHAR(50)     NOT NULL	REFERENCES user (nickname),
    context     		VARCHAR(100)    NOT NULL
    
);

CREATE TABLE IF NOT EXISTS comment_like_list (

	comment_like_list	SERIAL			NOT NULL	PRIMARY KEY,
    post_id     		INTEGER         NOT NULL	REFERENCES post (post_id),
    like_list   		JSON
    
);