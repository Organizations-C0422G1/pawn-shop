import { TestBed } from '@angular/core/testing';

import { ExpectedContractService } from './expected-contract.service';

describe('ExpectedContractService', () => {
  let service: ExpectedContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpectedContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
