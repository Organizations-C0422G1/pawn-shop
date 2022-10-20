import { TestBed } from '@angular/core/testing';

import { LiquidationServiceService } from './liquidation-service.service';

describe('LiquidationServiceService', () => {
  let service: LiquidationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquidationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
