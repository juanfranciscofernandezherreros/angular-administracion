import { TestBed } from '@angular/core/testing';

import { TranslateArticleService } from './translate-article.service';

describe('TranslateArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateArticleService = TestBed.get(TranslateArticleService);
    expect(service).toBeTruthy();
  });
});
