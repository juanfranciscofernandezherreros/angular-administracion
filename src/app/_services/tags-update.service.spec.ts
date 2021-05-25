import { TestBed } from '@angular/core/testing';

import { TagsUpdateService } from './tags-update.service';

describe('TagsUpdateService', () => {
  let service: TagsUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
