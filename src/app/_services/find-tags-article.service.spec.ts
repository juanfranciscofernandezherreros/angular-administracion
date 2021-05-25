import { TestBed } from '@angular/core/testing';

import { FindTagsArticleService } from './find-tags-article.service';

describe('FindTagsArticleService', () => {
  let service: FindTagsArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTagsArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
