import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { DataBinding } from './pages/data-binding/data-binding';
import { EmployeeList } from './pages/employee-list/employee-list';
import { NotFound } from './pages/not-found/not-found';
import { Signals } from './pages/signals/signals';
import { ControlFlow } from './pages/control-flow/control-flow';
import { AttributeDirective } from './pages/attribute-directive/attribute-directive';
import { TemplateForm } from './pages/template-form/template-form';
import { ReactiveForms } from './pages/reactive-forms/reactive-forms';
import { Pipes } from './pages/pipes/pipes';
import { SignalForms } from './pages/signal-forms/signal-forms';
import { LifeCycle } from './pages/life-cycle/life-cycle';
import { GetApi } from './pages/get-api/get-api';
import { ServiceTest } from './pages/service-test/service-test';
import { EmployeeCrud } from './pages/employee-crud/employee-crud';

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
    path:'reactive-forms',
    component: ReactiveForms
  },
  {
    path:'template-form',
    component: TemplateForm
  },
  {
    path:'pipes',
    component: Pipes,
  },
  {
    path:'signal-forms',
    component: SignalForms,
  },
  {
    path:'get-api',
    component: GetApi,
  },
  {
    path:'employee-crud',
    component: EmployeeCrud,
  },
  {
    path:'service-test',
    component: ServiceTest,
  },
  {
    path:'life-cycle',
    component: LifeCycle,
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
