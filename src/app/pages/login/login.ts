import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userObj: UserModel = new UserModel();
  router = inject(Router);


  onSubmit() {
    console.log('Login Data:', this.userObj);
  }

  onLoginUser() {
    if (this.userObj.email == "john@mail.com"
      && this.userObj.password == "john123") {
        this.router.navigateByUrl("layout/employee-crud");
      } else {
        alert('Invalid credentials!')
      }
  }
}

class UserModel {
  email: string;
  password: string;
  rememberMe: boolean;

  constructor() {
    this.email = "";
    this.password = "";
    this.rememberMe = false;
  }
}

