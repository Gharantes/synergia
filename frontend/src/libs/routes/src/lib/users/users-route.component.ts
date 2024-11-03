import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendableTableComponent } from '@synergia-frontend/tables';
import { UsersFacadeService } from './users-facade.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, ExtendableTableComponent, MatButton],
  template: `
    <button mat-raised-button>Criar Usuários por Excel</button>
    <lib-extendable-table
      [columns]="facade.tableInfo"
      [data$]="facade.usersData$"
    ></lib-extendable-table>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        overflow: auto;
      }
    `,
  ],
  providers: [UsersFacadeService],
})
export class UsersRouteComponent {
  constructor(public readonly facade: UsersFacadeService) {}
}
