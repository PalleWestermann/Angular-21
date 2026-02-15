import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  //deptName = "HR";

  deptName = signal('HR');
  deptId = signal(112);
  emp = signal({name: 'Edward', Id: 123});
  deptList = signal(["HR", "IT"]);

  constructor() {
    console.log('Before : ' + this.deptName());
    setTimeout(() =>
    {
      //this.deptName = "IT";
      this.deptName.set('IT');
      console.log('After : ' + this.deptName());
    }, 2000
    );

  }
}
