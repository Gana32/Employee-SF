import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl='http://localhost:3002';

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`)
  }

  getEmployee(id:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`)
  }

  searchEmployeeByName(name:string): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employees/search?name=${name}`)
  }

  getAllEmployeesSortedByIDAscending(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employees/sortA`)
  }

  getAllEmployeesSortedByIDDescending(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employees/sortD`)
  }
}
