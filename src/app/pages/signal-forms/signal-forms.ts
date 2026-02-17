import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
import { email, form, required } from '@angular/forms/signals';
import { FormField } from '@angular/forms/signals';


@Component({
  selector: 'app-signal-forms',
  imports: [FormField, JsonPipe],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalForms {
  empModel = signal(
    {name: '', email:''    }
  );
  // empForm = form(this.empModel);

  empForm = form(this.empModel,
    (schema) => {
      required(schema.name, {message: 'Name is required'}),
      required(schema.email, {message: 'Email is required' }),
      email(schema.email, {message: 'Email is not valid'})
    }
  );
}
