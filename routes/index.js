const express = require('express');
const router = express.Router();

const { ensureAuthenticated } = require('../config/auth');

// home
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// about
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// GET dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;
