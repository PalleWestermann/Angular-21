import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { DataBinding } from './pages/data-binding/data-binding';
import { EmployeeList } from './pages/employee-list/employee-list';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-binding',
    pathMatch: 'full'
  },
  {
    path:'add-employee',
    component: AddEmployee
  },
  {
    path:'data-binding',
    component: DataBinding
  },
  {
    path:'employee-list',
    component: EmployeeList
  },
  {
    path: '**',
    component: NotFound
  }

];
