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
    subtitle: 'Neem een duik in het archief van het Rijks Museum.',
    value: ''
  });
})


app.get('/search', (req, res) => {
  const key = `${url}&q=${req.query.q}`
  fetch(key)
    .then(async response => {
      const data = await response.json()
      const artworks = data.artObjects
      if (artworks.length > 0) {
        res.render('search', {
          title: req.query.q,
          value: req.query.q,
          artworks
        })
      } else {
        res.render('error', {
          title: 'Oeps... buiten het canvas gewerkt 🎨 ?',
          subtitle: 'Dit kan gebeuren, de zoekterm kan niet gevonden worden. Probeer het bovenin nogmaals!',
          value: req.query.q
        })
      }
    })
})

app.get('/detail/:objectNumber', (req, res) => {
  const key = `${url}&q=${req.params.objectNumber}`
  console.log(key);
  fetch(key)
    .then(async response => {
      const data = await response.json()
      const artworks = data.artObjects
      res.render('detail', {
        title: 'detail',
        artworks
      })
    })
})

module.exports = app;