CREATE DATABASE social_media_db;

USE social_media_db;

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  content TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);