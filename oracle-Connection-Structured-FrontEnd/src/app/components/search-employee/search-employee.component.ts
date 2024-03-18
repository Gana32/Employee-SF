import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent implements OnInit {
  employees: Employee[] = [];

  employee: Employee | undefined;
  searchId: number | undefined;

  constructor(private employeeService: EmployeeService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
      this.searchEmployee();
  }

  // searchEmployee(): void {
  //   if (this.searchId) {
  //     this.employeeService.getEmployee(this.searchId)
  //       .subscribe((employee: Employee) => {
  //         this.employee = employee;
  //         this.cdr.detectChanges();
  //         console.log(employee);
  //       });
  //   } else {
  //     // Handle case when searchId is not provided
  //   }
  // }
  searchEmployee(): void {
    if (this.searchId) {
      this.employeeService.getEmployee(this.searchId)
        .subscribe((data: any) => {
          if (Array.isArray(data)) {
            this.employees = data; // If data is an array of employees
          } else {
            this.employee = data; // If data is a single employee
          }
        });
    } else {
      // Handle case when searchId is not provided
    }
  }
}


