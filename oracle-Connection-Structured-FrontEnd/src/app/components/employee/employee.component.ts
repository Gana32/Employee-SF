import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees:Employee[] = [];
  filterName:string ='';
  sortOrder: string = 'SortA';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe((employees : Employee[]) => {
      this.employees = employees;
      this.filteredEmployees = employees; 
    }, err => {
      console.error('Error loading employees',err);
    });
  }

  applyFilter(){
    if(this.filterName.trim()===''){
      this.filteredEmployees=[...this.employees];
    }
    else{
      this.employeeService.searchEmployeeByName(this.filterName).subscribe((fileteredEmployees:Employee[])=>{
        this.filteredEmployees=fileteredEmployees;
      
      },err=>{
        console.error('Error loading employees',err);
      })
    }
  }
  applySorting() {
    if (this.sortOrder === 'SortA') {
      this.employeeService.getAllEmployeesSortedByIDAscending().subscribe((sortedEmployees: Employee[]) => {
        this.filteredEmployees = sortedEmployees;
      }, err => {
        console.error('Error sorting employees by ID ascending', err);
      });
    } else if (this.sortOrder === 'SortD') {
      this.employeeService.getAllEmployeesSortedByIDDescending().subscribe((sortedEmployees: Employee[]) => {
        this.filteredEmployees = sortedEmployees;
      }, err => {
        console.error('Error sorting employees by ID descending', err);
      });
    }
  }

}
