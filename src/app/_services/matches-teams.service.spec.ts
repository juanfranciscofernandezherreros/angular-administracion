import { TestBed } from '@angular/core/testing';

import { MatchesTeamsService } from './matches-teams.service';

describe('MatchesTeamsService', () => {
  let service: MatchesTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
