import { TestBed } from '@angular/core/testing';

import { ComentariosViewService } from './comentarios-view.service';

describe('ComentariosViewService', () => {
  let service: ComentariosViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentariosViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
