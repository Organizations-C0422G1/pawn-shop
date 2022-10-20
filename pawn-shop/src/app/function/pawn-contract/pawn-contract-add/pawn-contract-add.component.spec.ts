import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnContractAddComponent } from './pawn-contract-add.component';

describe('PawnContractAddComponent', () => {
  let component: PawnContractAddComponent;
  let fixture: ComponentFixture<PawnContractAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnContractAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnContractAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
