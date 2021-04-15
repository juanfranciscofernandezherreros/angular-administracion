import { TestBed } from '@angular/core/testing';

import { CategoriesDeleteService } from './categories-delete.service';

describe('CategoriesDeleteService', () => {
  let service: CategoriesDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
