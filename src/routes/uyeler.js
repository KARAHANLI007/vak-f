const express = require('express');
const router = express.Router();
const uyelerController = require('../controllers/uyelerController');

// CRUD işlemleri
router.get('/', uyelerController.getAllUyeler);
router.post('/', uyelerController.createUye);
router.put('/:id', uyelerController.updateUye);
router.delete('/:id', uyelerController.deleteUye);

module.exports = router;
