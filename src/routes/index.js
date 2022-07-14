const express = require('express');
const router = express.Router();
const datos = require('../../package.json')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about', { datos });
});



module.exports = router;