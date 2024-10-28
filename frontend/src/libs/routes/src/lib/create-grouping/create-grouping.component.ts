import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { CommonFormFieldComponent } from '@synergia-frontend/ui';

@Component({
  selector: 'lib-create-grouping',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInput, MatFormField, CommonFormFieldComponent, CommonFormFieldComponent],
  template: `
      <form [formGroup]="form">
        <sy-common-form-field
          [label]="'Nome'"
          [formControl]="form.controls.name"
        ></sy-common-form-field>

        <sy-common-form-field
          [label]="'Descrição'"
          [formControl]="form.controls.description"
        ></sy-common-form-field>
      </form>
  `,
  styles: [`
  
  `]
})
export class CreateGroupingComponent {
  constructor(
    private readonly fb: FormBuilder
  ) {
  }
  form = new this.fb.group({
    name: this.fb.control<string>('', Validators.required),
    description: this.fb.control<string>('', Validators.required)
  });
}