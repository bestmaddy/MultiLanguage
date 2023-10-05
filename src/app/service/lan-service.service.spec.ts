import { TestBed } from '@angular/core/testing';

import { LanServiceService } from './lan-service.service';

describe('LanServiceService', () => {
  let service: LanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
