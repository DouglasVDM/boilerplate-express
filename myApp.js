var express = require('express');
var app = express();

// 1.Meet the Node Console
app.get('/', (req, res) => {
  res.send(console.log('Hello World'));
});

// 2.Start a Working Express Server
app.get('/', (req, res) => {
  res.send(console.log('Hello World'));
});

// 3.Serve an HTML File
const absolutePath = __dirname + '/views/index.html';
app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

module.exports = app;


































 module.exports = app;
