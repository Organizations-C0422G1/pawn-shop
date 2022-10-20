import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateInformationComponent } from './employee-update-information.component';

describe('EmployeeUpdateInformationComponent', () => {
  let component: EmployeeUpdateInformationComponent;
  let fixture: ComponentFixture<EmployeeUpdateInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeUpdateInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
