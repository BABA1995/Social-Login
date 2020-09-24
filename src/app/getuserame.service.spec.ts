import { TestBed } from '@angular/core/testing';

import { GetuserameService } from './getuserame.service';

describe('GetuserameService', () => {
  let service: GetuserameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
