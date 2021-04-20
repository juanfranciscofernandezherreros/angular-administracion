import { TestBed } from '@angular/core/testing';

import { ComentariosCreateService } from './comentarios-create.service';

describe('ComentariosCreateService', () => {
  let service: ComentariosCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
