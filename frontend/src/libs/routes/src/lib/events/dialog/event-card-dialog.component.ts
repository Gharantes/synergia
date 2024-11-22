import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventDto } from '@synergia-frontend/api';

@Component({
  selector: 'lib-event-card-dialog',
  standalone: true,
  template: `
    <div id="event-card-dialog-container">
      <h2>
        {{ data.title }}
      </h2>

      {{ data.id }}
      {{ data.title }}
      {{ data.description }}
    </div>
  `,
  styles: [`
      :host {
          padding: 10px;
      }
    #event-card-dialog-container {
        width: 100%;
        height: 100%;
        
        h2 {
            width: 100%;
            text-align: justify;
        }
    }
    
  `],
  imports: [],
  providers: [],
})
export class EventCardDialogComponent {
  public readonly data = inject<EventDto>(MAT_DIALOG_DATA);
}