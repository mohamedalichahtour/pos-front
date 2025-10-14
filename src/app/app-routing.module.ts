import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: '',   redirectTo: '/employees', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  //{ path: 'second-component', component: SecondComponent },
    // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
