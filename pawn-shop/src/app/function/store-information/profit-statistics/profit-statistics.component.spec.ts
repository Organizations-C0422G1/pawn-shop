import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitStatisticsComponent } from './profit-statistics.component';

describe('ProfitStatisticsComponent', () => {
  let component: ProfitStatisticsComponent;
  let fixture: ComponentFixture<ProfitStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
