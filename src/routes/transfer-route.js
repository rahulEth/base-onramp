const express = require('express');
const router = express.Router();
const opreturnController = require('../controllers/transfer-controller');
const validateParams = require('../middleware/transfer-middleware');

router.post('/tokenTransfer/', validateParams, opreturnController.transferToken);

module.exports = router;
