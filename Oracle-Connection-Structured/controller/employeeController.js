// controllers/employeeController.js

const employeeRepository = require('../repository/employeeRepository');
const Employee = require('../model/employeeModel');

module.exports = {
  getAllEmployees: async function(req, res) {
    try {
      const employees = await employeeRepository.getAllEmployees();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getEmployeeById: async function(req, res) {
    try {
      const id = req.params.id;
      const employee = await employeeRepository.getEmployeeById(id);
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  searchEmployeeByName: async function(req, res) {
    try {
      const name = req.query.name;
      const employees = await employeeRepository.searchEmployeeByName(name);
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getAllEmployeesSortedByIdAscending: async function(req,res){
    try{
      const employees = await employeeRepository.getAllEmployeesSortedByIdAscending();
      res.json(employees);
    }
    catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getAllEmployeesSortedByIdDescending: async function(req,res){
    try{
      const employees = await employeeRepository.getAllEmployeesSortedByIdDescending();
      res.json(employees);
    }
    catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
};
