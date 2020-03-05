const express = require('express');
const calc = require('./calc');
const router = express.Router();

router.use('/calc', calc);

module.exports = router;