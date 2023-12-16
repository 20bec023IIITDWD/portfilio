const express = require('express');
const router = express.Router();
const repo = require('../controllers/githubrepo');
router.get('/',repo);
module.exports=router;