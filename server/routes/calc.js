const express = require('express');
const controllers = require('../controllers/index');
const router = express.Router();

// would be nice to perform with promises
router.get('/', (req, res) => { res.send(controllers.calculateSavings(req.query)); });

module.exports = router;