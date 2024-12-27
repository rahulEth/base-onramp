const express = require('express');
const router = express.Router();
const buyQuoteController = require('../controllers/buy-quote-controller');
const validateParams = require('../middleware/buy-quote-middleware');

router.post('/buyQuote/', validateParams, buyQuoteController.buyQuote);

router.get('/lauchOnramp/', buyQuoteController.onrampLaunch);

router.get('/supportedChains/', buyQuoteController.supprotedChains);



module.exports = router;