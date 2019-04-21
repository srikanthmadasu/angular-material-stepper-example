import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep1Component } from './registration-step1.component';

describe('RegistrationStep1Component', () => {
  let component: RegistrationStep1Component;
  let fixture: ComponentFixture<RegistrationStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
