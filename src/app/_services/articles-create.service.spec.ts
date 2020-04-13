import { TestBed } from '@angular/core/testing';

import { ArticlesCreateService } from './articles-create.service';

describe('ArticlesCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesCreateService = TestBed.get(ArticlesCreateService);
    expect(service).toBeTruthy();
  });
});
