const express = require('express');
const tasksController = require('../controllers/characters.controller.js');

let router = express.Router();

/* GET users listing. */
router.get('/', tasksController.actions.getCharacters);

module.exports = router;
