import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployee } from "./pages/add-employee/add-employee";
import { EmployeeList } from "./pages/employee-list/employee-list";
import { DataBinding } from "./pages/data-binding/data-binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-21');
}
