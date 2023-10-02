process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./express');

const app = express();
app.listen(8083);

module.exports = app;

console.log("Server is running.....");