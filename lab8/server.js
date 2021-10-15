var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];
var waitlist = [];
var capacity = 5;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/tables', (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve', (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/api/tables', (req, res) => {
  return res.json(tables);
});

app.get('/api/waitlist', (req, res) => {
  return res.json(waitlist);
});

app.get('/api/capacity', (req, res) => {
  return res.json(capacity);
});

app.post("/api/tables", function(req, res) {
  var newTable = req.body;
  console.log(newTable);

  if (capacity <= 0) {
    waitlist.push(newTable);
    res.json(false);
  }
  else {
    tables.push(newTable);
    capacity -= 1;
    res.json(true);
  }
});

app.post("/api/clear", function(req, res) {
  tables = [];
  waitlist = [];
  capacity = 5;
  res.json([]);
});

app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});
