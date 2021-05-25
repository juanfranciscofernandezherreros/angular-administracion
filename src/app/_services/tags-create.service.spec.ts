import { TestBed } from '@angular/core/testing';

import { TagsCreateService } from './tags-create.service';

describe('TagsCreateService', () => {
  let service: TagsCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
