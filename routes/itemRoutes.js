// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Define routes and link to controller
router.get('/', (req, res) => {
    res.render('index', req.query);
});

module.exports = router;
