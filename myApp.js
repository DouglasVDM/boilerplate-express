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

// 4.Serve Static Assets
const absolutePath3 = __dirname + '/public/style.css';
app.use('absolutePath3', express.static('/public'));
app.get('/public/style.css', (req, res) => {
  res.sendFile(absolutePath3);
});

// 5.Serve JSON on a Specific Route
app.get('/json', (req, res) => {
  res.json({ "message": "Hello json" });
});

module.exports = app;


































 module.exports = app;
