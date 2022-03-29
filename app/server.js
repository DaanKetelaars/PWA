// Requires
var express = require('express');
var path = require('path');
const fetch = require('node-fetch');
require('dotenv').config()

var app = express();
const api = process.env.API_KEY;
let url = `https://www.rijksmuseum.nl/api/nl/collection/?key=${api}`;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
  });
})


app.get('/search', (req, res) => {
  let query = '';
  const key = `${url}&q=${req.query.q}`
  fetch(key)
    .then(async response => {
      const data = await response.json()
      const artworks = data.artObjects
      res.render('search', {
        title: req.query.q,
        artworks
      })
    })
})

app.get('/detail/:id', (req, res) => {
  const key = `${url}&q=${req.params.q}`

  fetch(key)
    .then(async response => {
      const data = await response.json()
      // let artworks = data.artObject
      res.render('detail', {
        title: 'detail',
      })
    })
})

module.exports = app;