const express = require('express');
const phones = require('./Phones.json');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hallo this is my first Express js');
});

app.get('/data', (req, res) => {
  res.send('This is our Data Sideeeeeeeeeeeeeee , Page   . i pursesh keyboard');
});

app.get('/phones', (req, res) => {
  res.send(phones);
});

app.get('/phones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find(phone => phone.id === id);
  res.send(phone);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
