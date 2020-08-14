import { TestBed } from '@angular/core/testing';

import { GymAppServiceService } from './gym-app-service.service';

describe('GymAppServiceService', () => {
  let service: GymAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
