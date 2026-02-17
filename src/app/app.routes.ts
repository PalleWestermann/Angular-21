import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { DataBinding } from './pages/data-binding/data-binding';
import { EmployeeList } from './pages/employee-list/employee-list';
import { NotFound } from './pages/not-found/not-found';
import { Signals } from './pages/signals/signals';
import { ControlFlow } from './pages/control-flow/control-flow';
import { AttributeDirective } from './pages/attribute-directive/attribute-directive';
import { TemplateForm } from './pages/template-form/template-form';

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
    path:'control-flow',
    component: ControlFlow
  },
  {
    path:'attribute-directive',
    component: AttributeDirective
  },
  {
    path:'template-form',
    component: TemplateForm
  },
  {
    path:'signals',
    component: Signals
  },
  {
    path: '**',
    component: NotFound
  }

];
