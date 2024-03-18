const employeeRepository = require('../repository/employeeRepository');

module.exports = {
  getAllEmployees: async function() {
    try {
      return await employeeRepository.getAllEmployees();
    } catch (error) {
      console.error('Error fetching all employees:', error);
      throw error;
    }
  },

  getEmployeeById: async function(id) {
    try {
      return await employeeRepository.getEmployeeById(id);
    } catch (error) {
      console.error('Error fetching employee by ID:', error);
      throw error;
    }
  },

  searchEmployeeByName: async function(name) {
    try {
      return await employeeRepository.searchEmployeeByName(name);
    } catch (error) {
      console.error('Error fetching employee by name:', error);
      throw error;
    }
  },

  getAllEmployeesSortedByIdDescending: async function() {
    try {
      return await employeeRepository.getAllEmployeesSortedByIdDescending();
    } catch (error) {
      console.error('Error fetching employee by name:', error);
      throw error;
    }
  }
};
