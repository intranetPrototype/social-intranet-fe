import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordForm } from './model';
import { UserAuthenticationFacade } from '../store/user-authentication.facade';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  hideSendMailHint: boolean = true;
  forgotPasswordForm: FormGroup<ForgotPasswordForm>;
  error$: Observable<HttpErrorResponse | undefined>;

  get emailFormControl(): FormControl<string> {
    return this.forgotPasswordForm.controls.email;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      email: new FormControl('', { nonNullable: true, validators: [Validators.email, Validators.required] })
    });
  }

  ngOnInit(): void {
    this.error$ = this.userAuthenticationFacade.error$;
  }

  sendResetPasswordMail(): void {
    this.hideSendMailHint = !this.hideSendMailHint;

    this.userAuthenticationFacade.sendResetUserPasswordMail(
      this.emailFormControl.value
    );
  }
}
