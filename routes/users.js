const express = require('express');
const {salam } = require('../controller/userController')
const router = express.Router();

router.get('/', salam);

module.exports = router;