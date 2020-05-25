
const express = require('express');
const indexController = require('../controllers/index.controller.js');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.actions.getIndex);

// router.post('/', indexController.post);
// router.put('/', indexController.index);
// router.delete('/', indexController.index);

module.exports = router;
