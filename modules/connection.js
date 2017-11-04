// create database passport-intro

// CREATE TABLE users (
//  id SERIAL PRIMARY KEY,
//  username VARCHAR(100) NOT NULL UNIQUE,
//  password VARCHAR(120) NOT NULL
// );

var  connectionString = 'postgres://localhost:5432/passport-intro';

//could include a conditional here to pull from ENV varible 

module.exports = connectionString;