import { TestBed } from '@angular/core/testing';

import { CategoriesCreateService } from './categories-create.service';

describe('CategoriesCreateService', () => {
  let service: CategoriesCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
