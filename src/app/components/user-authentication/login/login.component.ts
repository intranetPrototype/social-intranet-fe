import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from './model';
import { UserAuthenticationFacade } from '../store/user-authentication.facade';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<LoginForm>;
  error$: Observable<HttpErrorResponse | undefined>

  get emailFormControl(): FormControl<string> {
    return this.loginForm.controls.email;
  }

  get passwordFormControl(): FormControl<string> {
    return this.loginForm.controls.password;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) {
    this.loginForm = this.fb.group<LoginForm>({
      email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { nonNullable: true, validators: Validators.required })
    });
  }

  ngOnInit(): void {
    // Check if AT gesetzt ist --> Request GetUser um zu checken ob user confirmed ist oder nicht
    // Registration dann auch auf login weiterleiten evtl?
    const accessToken = localStorage.getItem('access_token');
    this.error$ = this.userAuthenticationFacade.error$;

    if (accessToken) {
      this.userAuthenticationFacade.getUserByToken();
    }
  }

  signin(): void {
    this.userAuthenticationFacade.signinUser(
      this.emailFormControl.value,
      this.passwordFormControl.value
    );
  }
}
