import { TestBed } from '@angular/core/testing';

import { PawnTypeService } from './pawn-type.service';

describe('PawnTypeService', () => {
  let service: PawnTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PawnTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
