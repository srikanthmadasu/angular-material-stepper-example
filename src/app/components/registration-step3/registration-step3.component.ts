import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step3',
  templateUrl: './registration-step3.component.html',
  styleUrls: ['./registration-step3.component.css']
})
export class RegistrationStep3Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit() {
  }

  submit() {
    console.log('submitted');
    console.log(this.regForm.value);
    this.formSubmitted = true;

  }

}
