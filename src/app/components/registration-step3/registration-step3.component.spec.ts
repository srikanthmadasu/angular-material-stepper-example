import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep3Component } from './registration-step3.component';

describe('RegistrationStep3Component', () => {
  let component: RegistrationStep3Component;
  let fixture: ComponentFixture<RegistrationStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
