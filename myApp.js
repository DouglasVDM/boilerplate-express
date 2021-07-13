var express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()
var app = express();

// 7.Implement a Root-Level Request Logger Middleware
const logger = (req, res, next) => {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);
  next();
};

app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }));

// 10.Get Query Parameter Input from the Client
app.get('/name', (req, res) => {
  // const firstname = req.query.first;
  // const lastname = req.query.last;
  const { first: firstname, last: lastname } = req.query;

  res.send(
    {
      name: `${firstname} ${lastname}`
    }
  )
});

// 9.Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {
  const { word } = req.params
  res.send({ echo: word })
});

// 8.Chain Middleware to Create a Time Server
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
  }, (req, res) => {
  res.send({time: req.time})
  }
);



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

// 6.Use the .env file
app.get('/json', (req, res) => {
  let data = { 'message': 'Hello json' };
  
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    data.message = data.message.toUpperCase();
    res.json(data);
  } else {
    res.json(data);
  }
});

// 5.Serve JSON on a Specific Route
app.get('/json', (req, res) => {
  res.json({ "message": "Hello json" });
});

// 2.Start a Working Express Server
app.get('/', (req, res) => {
  res.send(console.log('Hello World'));
});

// 1.Meet the Node Console
app.get('/', (req, res) => {
  res.send(console.log('Hello World'));
});

module.exports = app;


































 module.exports = app;
