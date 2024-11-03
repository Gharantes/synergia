import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { SidebarComponent, TopbarComponent } from '@synergia-frontend/ui';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div id="layout-container">
      <lib-topbar></lib-topbar>
      <div id="main-container">
        <lib-sidebar></lib-sidebar>
        <router-outlet></router-outlet>
      </div>
    </div>

  `,
  styleUrl: `./app.component.scss`,
  imports: [RouterModule, MatButton, SidebarComponent, TopbarComponent],
})
export class AppComponent implements AfterViewInit {
  title = 'synergia-frontend';

  constructor(
    private readonly router: Router,
  ) {
  }
  
  ngAfterViewInit() {
    this.checkAuthentication()
  }

  private checkAuthentication() {
    if (!this.isAuthenticated()) {
      this.navigateToLogin();
    }
  }
  private isAuthenticated() {
    const authenticated = sessionStorage.getItem('authenticated');
    return authenticated === 'true';
  }

  private navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
