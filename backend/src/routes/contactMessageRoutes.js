const express = require('express');
const router = express.Router();
const contactMessageController = require('../controllers/contactMessageController');

router.post('/', contactMessageController.sendContactMessage);
router.get('/', contactMessageController.getAllContactMessages);

module.exports = router;
