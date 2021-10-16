import { TestBed } from '@angular/core/testing';

import { SkillSortingService } from './skill-sorting.service';

describe('SkillSortingService', () => {
  let service: SkillSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
