const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');

router.get('/', employeeController.getAllEmployees);
router.get('/search', employeeController.searchEmployeeByName);
router.get('/sortA',employeeController.getAllEmployeesSortedByIdAscending);
router.get('/sortD',employeeController.getAllEmployeesSortedByIdDescending);
router.get('/:id', employeeController.getEmployeeById);

module.exports = router;
