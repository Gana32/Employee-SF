import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';

const routes: Routes = [
  {path: '', component:EmployeeComponent},
  {path:'search',component:SearchEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
