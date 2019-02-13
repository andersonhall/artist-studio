const express = require('express');
const router = express.Router();

// home
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// about
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

module.exports = router;
