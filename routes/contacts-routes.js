const express = require('express');
const router = express.Router();
const createPath = require('../helpers/create-path');
const Contact = require('../models/contact');
const getContacts = require('../controllers/contacts-controller');

router.get('/contacts', getContacts)

module.exports = router