import { TestBed } from '@angular/core/testing';

import { CategoriesViewService } from './categories-view.service';

describe('CategoriesViewService', () => {
  let service: CategoriesViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
