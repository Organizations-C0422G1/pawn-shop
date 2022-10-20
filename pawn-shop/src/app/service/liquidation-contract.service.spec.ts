import { TestBed } from '@angular/core/testing';

import { LiquidationContractService } from './liquidation-contract.service';

describe('LiquidationContractService', () => {
  let service: LiquidationContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquidationContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
