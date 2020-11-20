const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'Transporte Galeas Puerto' });
});

router.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'Contacto' });
});

router.get('/about', (req, res) => {
  res.render('about.html', { title: 'Acerca de nosotros' });
});


module.exports = router;