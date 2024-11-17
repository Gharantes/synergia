import { effect, Injectable, signal } from '@angular/core';
import {
  TenantLoginPageConfigInfoDto,
  TenantResourceService,
} from '@synergia-frontend/api';
import { tap } from 'rxjs';

@Injectable()
export class LoginFacadeService {
  public loginPageConfigurationSignal =
    signal<null | TenantLoginPageConfigInfoDto>(null);

  constructor(
    private readonly service: TenantResourceService
  ) {
    effect(() => {
      const values = this.loginPageConfigurationSignal()

      if (values?.textHex) {
      }
    });
  }

  public getLoginPageConfigurationsOfTenantByTenantId(idTenant: number) {
    this.service
      .getLoginPageConfigurationsOfTenantByTenantId(idTenant)
      .pipe(
        tap((res: TenantLoginPageConfigInfoDto): void =>
          this.loginPageConfigurationSignal.set(res)
        )
      )
      .subscribe();
  }
}