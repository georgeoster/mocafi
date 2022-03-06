import { TestBed } from '@angular/core/testing';

import { CheckBalanceService } from './check-balance.service';

describe('CheckBalanceService', () => {
  let service: CheckBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
