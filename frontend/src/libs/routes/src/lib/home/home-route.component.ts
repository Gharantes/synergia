import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule],
  template: `Hello`,
  styles: [],
})
export class HomeRouteComponent {
  constructor() {
    console.log("HOME ROUTE");
  }
}
