import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud implements OnInit{
  empObj: Employee = new Employee();
  //employees: Employee[] = [];
  employees = signal<Employee[]>([]);

  http = inject(HttpClient);

  ngOnInit() {
    this.getAllEmployees();
  }

  onEditEmployee(obj: Employee) {
    // Next two lines ensures the form list is no longer affected by changes made in the
    // Add/Update Form (until submit) (watch the video around the 4th minute).
    const strEmp = JSON.stringify(obj);
    const empObj = JSON.parse(strEmp);
    this.empObj=empObj;
  }

  getAllEmployees() {
    this.http.get("https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee").subscribe(
      {
        next:(res : any) => {
          this.employees.set(res);
        }
      }
    );
  }

  onSaveEmployee() {
    this.http.post("https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee",this.empObj).subscribe({
      next:(result: any) =>
      {
        this.employees = result;
        this.getAllEmployees();
      }
    });
  }

  onUpdateEmployee() {
    this.http.put("https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee/" + this.empObj.id,this.empObj).subscribe({
      next:(result: any) =>
      {
        this.getAllEmployees();
      }
    });
  }

  onDeleteEmployee(id:number) {

    const Confirm = confirm("Are you sure you want to delete this record?");
    if (Confirm) {
      this.http.delete("https://68397a596561b8d882b08dd5.mockapi.io/api/v1/employee/" + id).subscribe({
        next:(result: any) =>
        {
          this.getAllEmployees();
        }
      });

    }
  }
}

// Class Employee
class Employee {
  id: number;
  name: string;
  department: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.department = "";
  }
}
