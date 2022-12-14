'use strict';
const express = require('express');
const router = express.Router();
const nexioController = require('../controllers/nexio-controller');
router.post('/token', nexioController.saveCardOneTimeTokenApi);
router.post('/saveCard', nexioController.saveCardTokenApi);
router.post('/process', nexioController.cardTransactionApi);
router.post('/itoken', nexioController.runCardOneTimeIFrameTokenApi);
module.exports = router;