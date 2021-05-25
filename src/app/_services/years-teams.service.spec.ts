import { TestBed } from '@angular/core/testing';

import { YearsTeamsService } from './years-teams.service';

describe('YearsTeamsService', () => {
  let service: YearsTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearsTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
