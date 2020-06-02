import { TestBed } from '@angular/core/testing';

import { ObtenerComentariosService } from './obtener-comentarios.service';

describe('ObtenerComentariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerComentariosService = TestBed.get(ObtenerComentariosService);
    expect(service).toBeTruthy();
  });
});
