import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordForm } from './model';
import { UserAuthenticationFormValidator } from '../validator';
import { UserAuthenticationFacade } from '../store/user-authentication.facade';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  showRedirectToLogin: boolean = false;
  resetPasswordForm: FormGroup<ResetPasswordForm>;
  error$: Observable<HttpErrorResponse | undefined>;

  get passwordControl(): FormControl<string> {
    return this.resetPasswordForm.controls.password;
  }

  get passwordRepeatControl(): FormControl<string> {
    return this.resetPasswordForm.controls.passwordRepeat;
  }

  get hasInvalidPassworRepeatError(): boolean {
    return this.resetPasswordForm.hasError('invalidPasswordRepeat')
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      password: new FormControl('', { nonNullable: true, validators: Validators.required }),
      passwordRepeat: new FormControl('', { nonNullable: true, validators: Validators.required })
    }, {
      validators: [
        UserAuthenticationFormValidator.samePasswordValidator
      ]
    });
  }

  ngOnInit(): void {
    this.error$ = this.userAuthenticationFacade.error$;
  }

  resetPassword(): void {
    this.showRedirectToLogin = true;
    this.userAuthenticationFacade.updateUserPassword(this.passwordControl.value);
    this.resetPasswordForm.reset();
  }

}
