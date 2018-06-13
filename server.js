const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

 // app.get('/login', function (req, res) {
 //   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
 // });

 app.get('/register', function (req, res) {
   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
 });

 app.get('/users', function(req, res) {
   res.json([
     {id: 1, username: "somebody"},
     {id: 2, username: "somebody_else"}
   ]);
 });

app.listen(port, () => console.log(`Listening on port ${port}`));
