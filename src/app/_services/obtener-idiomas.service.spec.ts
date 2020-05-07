import { TestBed } from '@angular/core/testing';

import { ObtenerIdiomasService } from './obtener-idiomas.service';

describe('ObtenerIdiomasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObtenerIdiomasService = TestBed.get(ObtenerIdiomasService);
    expect(service).toBeTruthy();
  });
});
