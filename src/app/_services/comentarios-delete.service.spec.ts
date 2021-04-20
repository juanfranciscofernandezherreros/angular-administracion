import { TestBed } from '@angular/core/testing';

import { ComentariosDeleteService } from './comentarios-delete.service';

describe('ComentariosDeleteService', () => {
  let service: ComentariosDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
