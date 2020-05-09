import { TestBed } from '@angular/core/testing';

import { ObtenerIdiomasDisponibleService } from './obtener-idiomas-disponible.service';

describe('ObtenerIdiomasDisponibleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerIdiomasDisponibleService = TestBed.get(ObtenerIdiomasDisponibleService);
    expect(service).toBeTruthy();
  });
});
