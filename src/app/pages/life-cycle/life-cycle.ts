import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
, DoCheck, OnDestroy {

  // API calls. Set initial values.
  ngOnInit() : void {
    console.log('ng OnInit ran');

  }

  constructor() {
    console.log("Constructor ran");

  }

  ngAfterContentInit() : void {
    console.log("AfterContentInit ran");
  }

  ngAfterContentChecked() : void {
    console.log("AfterContentChecked ran");
  }


  // ViewChild
  ngAfterViewInit() : void{
    console.log("AfterViewInit ran");
  }
  ngAfterViewChecked() : void {
    console.log("AfterViewChecked ran");
  }
  ngDoCheck() : void {
    console.log("DoCheck ran");
  }
  // Unsubscribe
  ngOnDestroy() : void {
    console.log("OnDestroy ran");
  }

}
