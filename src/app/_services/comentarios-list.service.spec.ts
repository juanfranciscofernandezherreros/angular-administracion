import { TestBed } from '@angular/core/testing';

import { ComentariosListService } from './comentarios-list.service';

describe('ComentariosListService', () => {
  let service: ComentariosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
