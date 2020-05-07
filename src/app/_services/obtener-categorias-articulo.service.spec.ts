import { TestBed } from '@angular/core/testing';

import { ObtenerCategoriasArticuloService } from './obtener-categorias-articulo.service';

describe('ObtenerCategoriasArticuloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerCategoriasArticuloService = TestBed.get(ObtenerCategoriasArticuloService);
    expect(service).toBeTruthy();
  });
});
