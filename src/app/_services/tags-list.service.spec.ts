import { TestBed } from '@angular/core/testing';

import { TagsListService } from './tags-list.service';

describe('TagsListService', () => {
  let service: TagsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
