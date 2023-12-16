const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const loginform = require('../controllers/login');
router.get('/',loginform)
router.post('/',auth);


module.exports=router;