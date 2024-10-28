import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  selector: 'lib-create-grouping',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInput, MatFormField],
  template: `
      <form [formGroup]="form">
        <mat-form-field [appearance]="'outline'">
          <mat-label>Nome</mat-label>
          <input matInput [formControl]="form.controls.name" type="text" />
        </mat-form-field>

        <mat-form-field [appearance]="'outline'">
          <mat-label>Descrição</mat-label>
          <input matInput [formControl]="form.controls.description" type="text" />
        </mat-form-field>
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