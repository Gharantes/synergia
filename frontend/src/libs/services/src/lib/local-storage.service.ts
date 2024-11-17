import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public tenants: {
    id: number,
    label: string
  }[] = [];

  public getTenantsFromLocalStorage() {
    const tenantsAsString = localStorage.getItem('tenants');
    if (tenantsAsString) {
      const a = JSON.parse(tenantsAsString)
    }
  }
  public addTenantToLocalStorage() {
    const tenantsAsString = localStorage.getItem('tenants');
  }
  constructor() {
  }
}

