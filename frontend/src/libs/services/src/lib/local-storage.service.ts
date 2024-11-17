import { Injectable, signal } from '@angular/core';
import { IDoIdentifier } from '@synergia-frontend/utils';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getTenantsFromLocalStorage(): IDoIdentifier[] {
    const tenantsAsString = localStorage.getItem('tenants');
    if (tenantsAsString) {
      return JSON.parse(tenantsAsString) as IDoIdentifier[];
    } else {
      localStorage.setItem('tenants', JSON.stringify([]));
      return []
    }
  }
  public addTenantToLocalStorage(tenant: IDoIdentifier) {
    const tenants = this.getTenantsFromLocalStorage();
    tenants.push(tenant);
    localStorage.setItem('tenants', JSON.stringify(tenants));
  }
}

