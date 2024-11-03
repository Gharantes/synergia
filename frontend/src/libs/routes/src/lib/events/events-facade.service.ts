import { Injectable } from '@angular/core';
import { EventoResourceService } from '@synergia-frontend/api';
import { tap } from 'rxjs';

@Injectable()
export class EventsFacadeService {
  constructor(
    private readonly service: EventoResourceService
  ) {
  }

  getAllEvents() {
    this.service.getAllEvento().pipe().subscribe()
  }
  createEvent(form: { name: string | null | undefined; description: string | null | undefined }) {
  }
}