const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');

router.get('/', customerController) 



module.exports = router;