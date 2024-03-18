// models/Employee.js

class Employee {
    constructor(employeeId, firstName, lastName, email, phoneNumber, hireDate, jobId, salary, commissionPct, managerId, departmentId) {
      this.employeeId = employeeId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.hireDate = hireDate;
      this.jobId = jobId;
      this.salary = salary;
      this.commissionPct = commissionPct;
      this.managerId = managerId;
      this.departmentId = departmentId;
    }
  
    // Getter and setter methods for each attribute
  
    // Additional methods for business logic or data validation can be added here
  }
  
  module.exports = Employee;
  