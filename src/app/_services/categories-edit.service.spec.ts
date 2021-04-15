import { TestBed } from '@angular/core/testing';

import { CategoriesEditService } from './categories-edit.service';

describe('CategoriesEditService', () => {
  let service: CategoriesEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
