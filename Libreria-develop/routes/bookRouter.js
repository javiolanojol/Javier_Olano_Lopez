const express = require('express');
const router = express.Router();
const book = require('../controllers/bookController.js');

router.get('/bookCatalog',book.list);
router.get('/bookShow/:id',book.show);
router.post('/createBook', book.save);
router.post('/editBook/:id', book.edit);
router.get('/deleteBook/:id', book.delete);


module.exports = router;