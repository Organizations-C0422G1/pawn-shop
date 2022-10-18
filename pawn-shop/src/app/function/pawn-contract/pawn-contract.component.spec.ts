import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnContractComponent } from './pawn-contract.component';

describe('PawnContractComponent', () => {
  let component: PawnContractComponent;
  let fixture: ComponentFixture<PawnContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
