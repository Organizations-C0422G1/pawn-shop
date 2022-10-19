import { TestBed } from '@angular/core/testing';

import { QuickContractService } from './quick-contract.service';

describe('QuickContractService', () => {
  let service: QuickContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
