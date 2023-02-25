import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model';
import { ConfirmUserRegistration, GetUserByToken, LogoutUser, ResendConfirmRegistration, SendResetUserPasswordMail, SigninUser, SignupUser, UpdateUserPassword } from './action';
import { HttpErrorResponse } from '@angular/common/http';
import { getUserAuthenticationError, getUserAuthenticationUser } from './user-authentication.selector';
import { Observable } from 'rxjs';
import { User } from "src/api/models";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationFacade {

  constructor(private readonly store: Store<AppState>) { }

  get user(): Observable<User | undefined> {
    return this.store.select(getUserAuthenticationUser);
  }

  get error$(): Observable<HttpErrorResponse | undefined> {
    return this.store.select(getUserAuthenticationError);
  }

  signupUser(firstName: string, lastName: string, email: string, password: string): void {
    this.store.dispatch(new SignupUser(
      firstName,
      lastName,
      email,
      password
    ));
  }

  signinUser(email: string, password: string): void {
    this.store.dispatch(new SigninUser(
      email,
      password
    ));
  }

  confirmUserRegistration(): void {
    this.store.dispatch(new ConfirmUserRegistration());
  }

  resendConfirmRegistration(email: string): void {
    this.store.dispatch(new ResendConfirmRegistration(
      email
    ));
  }

  getUserByToken(): void {
    this.store.dispatch(new GetUserByToken());
  }

  logoutUser(): void {
    this.store.dispatch(new LogoutUser());
  }

  sendResetUserPasswordMail(email: string): void {
    this.store.dispatch(new SendResetUserPasswordMail(
      email
    ));
  }

  updateUserPassword(password: string): void {
    this.store.dispatch(new UpdateUserPassword(
      password
    ));
  }
}