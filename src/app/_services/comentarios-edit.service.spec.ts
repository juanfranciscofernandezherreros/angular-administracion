import { TestBed } from '@angular/core/testing';

import { ComentariosEditService } from './comentarios-edit.service';

describe('ComentariosEditService', () => {
  let service: ComentariosEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
