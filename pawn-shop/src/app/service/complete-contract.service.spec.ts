import { TestBed } from '@angular/core/testing';

import { CompleteContractService } from './complete-contract.service';

describe('CompleteContractService', () => {
  let service: CompleteContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
