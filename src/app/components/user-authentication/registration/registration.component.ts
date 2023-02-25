import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationForm } from './model';
import { UserAuthenticationFacade } from '../store/user-authentication.facade';
import { UserAuthenticationFormValidator } from '../validator';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup<RegistrationForm>;
  error$: Observable<HttpErrorResponse | undefined>

  get isInvalidEmailRepeat(): boolean {
    return this.registrationForm.hasError('invalidEmailRepeat');
  }

  get isInvalidPasswordRepeat(): boolean {
    return this.registrationForm.hasError('invalidPasswordRepeat');
  }

  get emailControl(): FormControl<string> {
    return this.registrationForm.controls.email;
  }

  get emailRepeatControl(): FormControl<string> {
    return this.registrationForm.controls.emailRepeat;
  }

  get passwordControl(): FormControl<string> {
    return this.registrationForm.controls.password;
  }

  get passwordRepeatControl(): FormControl<string> {
    return this.registrationForm.controls.passwordRepeat;
  }

  get firstNameControl(): FormControl<string> {
    return this.registrationForm.controls.firstName;
  }

  get lastNameControl(): FormControl<string> {
    return this.registrationForm.controls.lastName;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) {
    this.registrationForm = this.fb.group<RegistrationForm>({
      email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      emailRepeat: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { nonNullable: true, validators: Validators.required }),
      passwordRepeat: new FormControl('', { nonNullable: true, validators: Validators.required }),
      firstName: new FormControl('', { nonNullable: true, validators: Validators.required }),
      lastName: new FormControl('', { nonNullable: true, validators: Validators.required })
    }, {
      validators: [
        UserAuthenticationFormValidator.sameEmailValidator,
        UserAuthenticationFormValidator.samePasswordValidator
      ]
    });
  }

  ngOnInit(): void {
    this.error$ = this.userAuthenticationFacade.error$;
  }

  signup(): void {
    this.userAuthenticationFacade.signupUser(
      this.firstNameControl.value,
      this.lastNameControl.value,
      this.emailControl.value,
      this.passwordControl.value
    );
  }
}
