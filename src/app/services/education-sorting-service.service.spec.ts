import { TestBed } from '@angular/core/testing';

import { EducationSortingServiceService } from './education-sorting-service.service';

describe('EducationSortingServiceService', () => {
  let service: EducationSortingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationSortingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
