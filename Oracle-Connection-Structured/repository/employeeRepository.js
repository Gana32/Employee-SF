// repositories/employeeRepository.js

const dbConfig = require('../config/dbConfig');

module.exports = {
  getAllEmployees: async function() {
    try {
      const connection = await dbConfig.connect();
      const result = await connection.execute(
       `SELECT * FROM employees`
      );
      connection.close();
      return result.rows;
    } catch (error) {
      console.error('Error fetching all employees:', error);
      throw error;
    }
  },

  getEmployeeById: async function(id) {
    try {
      const connection = await dbConfig.connect();
      const result = await connection.execute(
        `SELECT * FROM employees WHERE employee_id = :id`,
        [id]
      );
      connection.close();
      return result.rows;
    } catch (error) {
      console.error('Error fetching employee by ID:', error);
      throw error;
    }
  },

  searchEmployeeByName: async function(name) {
    try {
      //console.log('Searching for employees with name:', name);
      const connection = await dbConfig.connect();
      const result = await connection.execute(
        `SELECT * FROM employees WHERE first_name LIKE :name OR last_name LIKE :name`,
        {name:`%${name}%`}
      );
      connection.close();
      return result.rows;
    } catch (error) {
      console.error('Error fetching employee by name:', error);
      throw error;
    }
  },
  getAllEmployeesSortedByIdAscending: async function() {
    try {
      const connection = await dbConfig.connect();
      const result = await connection.execute(
        `SELECT * FROM employees ORDER BY employee_id ASC`
      );
      connection.close();
      return result.rows;
    } catch (error) {
      console.error('Error fetching all employees sorted by ID:', error);
      throw error;
    }
  },
  getAllEmployeesSortedByIdDescending: async function() {
    try {
      const connection = await dbConfig.connect();
      const result = await connection.execute(
        `SELECT * FROM employees ORDER BY employee_id DESC`
      );
      connection.close();
      return result.rows;
    } catch (error) {
      console.error('Error fetching all employees sorted by ID:', error);
      throw error;
    }
  }
  
};

