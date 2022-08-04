USE sys;
DROP DATABASE IF EXISTS hanghae_blog_dev;
CREATE DATABASE IF NOT EXISTS hanghae_blog_dev;
USE hanghae_blog;

DROP TABLE IF EXISTS board_like_list;
DROP TABLE IF EXISTS comment_like_list;
DROP TABLE IF EXISTS board;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (

    nickname    VARCHAR(50)     NOT NULL    PRIMARY KEY,
    password    VARCHAR(255)     NOT NULL
    -- server 에서는 30 자 제한입니다.
    
);

CREATE TABLE IF NOT EXISTS board (

    board_id    SERIAL          NOT NULL    PRIMARY KEY,
    author      VARCHAR(50)     NOT NULL	REFERENCES user (nickname),
    title       VARCHAR(100)    NOT NULL,
    context     VARCHAR(300)    NOT NULL

);

CREATE TABLE IF NOT EXISTS board_like_list (

    board_like_list	SERIAL			NOT NULL    PRIMARY KEY,
    board_id     	INTEGER         NOT NULL	REFERENCES board(board_id),
    author   	    VARCHAR(50)     NOT NULL    REFERENCES user(nickname)
    
);

CREATE TABLE IF NOT EXISTS comment (

    comment_id  		SERIAL          NOT NULL 	PRIMARY KEY,
    board_id            INTEGER         NOT NULL    REFERENCES board (board_id),
    author      		VARCHAR(50)     NOT NULL	REFERENCES user (nickname),
    context     		VARCHAR(100)    NOT NULL
    
);

CREATE TABLE IF NOT EXISTS comment_like_list (

	comment_like_list	SERIAL			NOT NULL	PRIMARY KEY,
    comment_id     	INTEGER         NOT NULL	REFERENCES comment(comment_id),
    author   	    VARCHAR(50)     NOT NULL    REFERENCES user(nickname)
    
);