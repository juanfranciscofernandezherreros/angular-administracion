import { TestBed } from '@angular/core/testing';

import { ObtenerIdiomasArticuloDisponibleService } from './obtener-idiomas-articulo-disponible.service';

describe('ObtenerIdiomasArticuloDisponibleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerIdiomasArticuloDisponibleService = TestBed.get(ObtenerIdiomasArticuloDisponibleService);
    expect(service).toBeTruthy();
  });
});
