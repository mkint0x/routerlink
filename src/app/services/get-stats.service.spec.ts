import { TestBed } from '@angular/core/testing';

import { GetStatsService } from './get-stats.service';

describe('GetStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStatsService = TestBed.get(GetStatsService);
    expect(service).toBeTruthy();
  });
});
