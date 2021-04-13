import { TestBed } from '@angular/core/testing';

import { TagsDeleteService } from './tags-delete.service';

describe('TagsDeleteService', () => {
  let service: TagsDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
