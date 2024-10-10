import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    
  `,
  styles: [`  
  `],
  imports: [RouterModule, MatButton],
})
export class AppComponent {
  title = 'synergia-frontend';
}
