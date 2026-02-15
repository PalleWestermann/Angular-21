import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isShowText : boolean = false;
  showSuccessLabel: WritableSignal<boolean> = signal(false);
  age = 0;
  courses : string[] = ["Angular", "React"];

  deptList = [
    {name: "HR", id: 123},
    {name: "IT", id: 444},
  ];

  ToggleLabelVisibility() {
    this.showSuccessLabel.set(!this.showSuccessLabel());
  }
}
