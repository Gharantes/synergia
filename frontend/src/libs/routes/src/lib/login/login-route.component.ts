import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonFormFieldComponent } from '@synergia-frontend/ui';
import { AuthenticationService } from '@synergia-frontend/services';
import { LoginFacadeService } from './login-facade.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-login',
  standalone: true,
  template: `
    <div 
      id="route-container" 
      *ngIf="{ 
        textHex: facade.loginPageConfigurationSignal()?.textHex ?? 'black',
      } as style">
      <div id="container-for-system-options" class="abs-top-right">
        <div 
          *ngIf="selectedTenant"
          id="sistema-selecionado"
          [ngStyle]="{ color: style.textHex, 'border-color': style.textHex }">
          Bloco
        </div>
        <div id="lista-sistemas">
          <div 
            *ngFor="let option of systemOptions" 
            class="sistema-option"
            [ngStyle]="{ color: style.textHex, 'border-color': style.textHex }">
            Opção Bloco
          </div>
          <div 
            class="login-em-novo-sistema"
            [ngStyle]="{ color: style.textHex, 'border-color': style.textHex }">
            Entrar em outro Tenant
          </div>
        </div>
      </div>

      <div
        id="container-for-login-form"
        [ngStyle]="{ 'border-color': style.textHex }">
        
        <form>
          <lib-sy-common-form-field
            [control]="form.controls.email"
            [label]="'Email'"
          ></lib-sy-common-form-field>

          <lib-sy-common-form-field
            [control]="form.controls.password"
            [label]="'Senha'"
          ></lib-sy-common-form-field>
        </form>

        <div id="login-section">
          
          <button mat-raised-button (click)="login()">Login</button>
          <div [ngStyle]="{ color: style.textHex }">Esqueci minha senha</div>
        </div>
      </div>
    </div>
  `,
  imports: [
    CommonModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    ReactiveFormsModule,
    CommonFormFieldComponent,
  ],
  providers: [LoginFacadeService],
  styleUrl: 'login-route.component.scss',
})
export class LoginRouteComponent {
  constructor(
    public readonly facade: LoginFacadeService,
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService,
    private readonly fb: FormBuilder,
  ) {
    this.form = this.createLoginFormGroup();
  }

  /** Create Login Form **/
  public form: FormGroup<{
    email: FormControl<null>,
    password: FormControl<null>
  }>
  private createLoginFormGroup() {
    return this.fb.group({
      email: this.fb.control(null),
      password: this.fb.control(null)
    })
  }


  systemOptions: {
    title: string;
    imgUrl: string;
  }[] = [
  ];

  selectedTenant?: { id: number, label: string }
  onTenantSelected() {
    console.log("Tenant Selected");
  }

  login() {
    this.authenticationService.updateAuthenticated(true);
    this.navigateToHome();
  }
  navigateToHome() {
    this.router.navigate(['/home']).then();
  }

  tenantSelected(idTenant: number) {

  }
}
