import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { CommonFormFieldComponent } from '@synergia-frontend/ui';
import { MatButton } from '@angular/material/button';
import { EventsFacadeService } from './events-facade.service';
import { MatDivider } from '@angular/material/divider';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'lib-create-grouping',
  standalone: true,
  providers: [EventsFacadeService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    CommonFormFieldComponent,
    CommonFormFieldComponent,
    MatButton,
    MatDivider,
    MatCard,
  ],
  template: `
    <form [formGroup]="form">
      <sy-common-form-field
        [label]="'Nome'"
        [control]="form.controls.name"
      ></sy-common-form-field>

      <sy-common-form-field
        [label]="'Descrição'"
        [control]="form.controls.description"
      ></sy-common-form-field>
    </form>

    <button
      mat-raised-button
      [disabled]="invalidForm"
      (click)="createGrouping()"
    >
      Criar
    </button>

    <mat-divider></mat-divider>

    <div id="event-cards-container">
      <mat-card [appearance]="'outlined'">
        <div>Title</div>
        <div>Description</div>
      </mat-card>
    </div>
  `,
  styles: [``],
})
export class EventsRouteComponent {
  public readonly form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly facade: EventsFacadeService
  ) {
    this.form = this.fb.group({
      name: this.fb.control<string>('', Validators.required),
      description: this.fb.control<string>('', Validators.required),
    });
  }

  public createForm() {
    return this.fb.group({
      name: this.fb.control<string>('', Validators.required),
      description: this.fb.control<string>('', Validators.required),
    });
  }
  get invalidForm() {
    return this.form.invalid;
  }

  createGrouping() {
    const form = this.form.value;
    const formValue = {
      name: form.name,
      description: form.description,
    };
    this.facade.createEvent(formValue);
  }
}