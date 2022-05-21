const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authentication');

// Add the required routes
router.use('/auth', require('./auth'));
router.use('/menus', authenticate, require('./menus'));
router.use('/reviews', authenticate, require('./reviews'));
router.use('/users', authenticate, require('./users'));
router.use('/orders', authenticate, require('./orders'));
router.use('/contacts', authenticate, require('./contacts'));


module.exports = router;