import { TestBed } from '@angular/core/testing';

import { YearsListService } from './years-list.service';

describe('YearsListService', () => {
  let service: YearsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
