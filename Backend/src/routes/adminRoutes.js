const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');

const dbMiddleware = require('../middleware/dbMiddleware.js');
router.use(dbMiddleware);
router.post('/login', adminController.loginAdmin);
module.exports = router;