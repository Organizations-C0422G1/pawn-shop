import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnItemListComponent } from './pawn-item-list.component';

describe('PawnItemListComponent', () => {
  let component: PawnItemListComponent;
  let fixture: ComponentFixture<PawnItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
