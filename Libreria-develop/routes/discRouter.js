const express = require('express');
const router = express.Router();
const disc = require('../controllers/discController.js');

router.get('/discCatalog',disc.list);
router.get('/discShow/:id',disc.show);
router.post('/createDisc', disc.save);
router.post('/editDisc/:id', disc.edit);
router.get('/deleteDisc/:id', disc.delete);

module.exports = router;