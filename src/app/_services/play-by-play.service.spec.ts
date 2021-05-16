import { TestBed } from '@angular/core/testing';

import { PlayByPlayService } from './play-by-play.service';

describe('PlayByPlayService', () => {
  let service: PlayByPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayByPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
