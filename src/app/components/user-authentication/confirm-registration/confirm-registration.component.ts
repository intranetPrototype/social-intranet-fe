import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationFacade } from '../store/user-authentication.facade';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResendConfirmRegistrationForm } from './model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss']
})
export class ConfirmRegistrationComponent implements OnInit {

  isRedirect: boolean = false;
  error$: Observable<HttpErrorResponse | undefined>;
  resendConfirmRegistrationForm: FormGroup<ResendConfirmRegistrationForm>;

  get resendConfirmRegistrationControl(): FormControl<string> {
    return this.resendConfirmRegistrationForm.controls.resendConfirmationEmail;
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly activatedRoute: ActivatedRoute,
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) {
    this.resendConfirmRegistrationForm = this.formBuilder.group({
      resendConfirmationEmail: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] })
    });
    this.error$ = this.userAuthenticationFacade.error$;
  }

  ngOnInit(): void {
    this.isRedirect = this.activatedRoute.snapshot.queryParamMap.get('redirected') === 'true';

    if (!this.isRedirect) {
      this.userAuthenticationFacade.confirmUserRegistration();
    }
  }

  resendConfirmRegistration(): void {
    this.userAuthenticationFacade.resendConfirmRegistration(
      this.resendConfirmRegistrationControl.value
    );
  }
}
