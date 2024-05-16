const express = require('express');
const router = express.Router();
const {registerUser,Loginuser} = require('../controllers/authControllers');

router.post('/register', registerUser);
router.post('/login', Loginuser);

module.exports = router;
