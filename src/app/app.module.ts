import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { RegistrationStep1Component } from './components/registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './components/registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './components/registration-step3/registration-step3.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationStep1Component,
    RegistrationStep2Component,
    RegistrationStep3Component
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatStepperModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
