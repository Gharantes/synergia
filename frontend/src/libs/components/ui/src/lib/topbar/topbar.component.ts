import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-topbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="top-bar-container">
      <div>Synergia</div>
      
      <div>Guilherme Arantes</div>
    </div>
  `,
  styles: [`
    :host {
        height: 55px;
        width: 100%;
        background: green;
    }
    #top-bar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
  `],
})
export class TopbarComponent {}
