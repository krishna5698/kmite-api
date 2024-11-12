const express = require('express');
const router = express.Router();
const teacherController = require('../Controllers/teacherController');

// Login route
router.post('/login', teacherController.loginTeacher);
router.post('/register', teacherController.registerTeacher);

module.exports = router;
