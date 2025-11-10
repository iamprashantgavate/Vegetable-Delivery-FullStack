-- create database (if not exists)
CREATE DATABASE IF NOT EXISTS organica CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- create backend user (allowing remote access from any host; better to restrict host)
CREATE USER 'admin'@'%' IDENTIFIED BY '12345678';

-- grant least-privilege (replace schema if required)
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER ON organica.* TO 'admin'@'%';

FLUSH PRIVILEGES;

-- verify user
SELECT user, host, plugin FROM mysql.user WHERE user='admin';

