import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/api/services';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SigninUserRequest, SignupUserRequest, User } from 'src/api/models';
import { UserAuthenticationPageConstants } from './const';
import {
  ConfirmUserRegistrationFailure,
  ConfirmUserRegistrationSuccess,
  GetUserByTokenFailure,
  GetUserByTokenSuccess,
  LogoutUserFailure,
  LogoutUserSuccess,
  ResendConfirmRegistration,
  ResendConfirmRegistrationFailure,
  ResendConfirmRegistrationSuccess,
  SendResetUserPasswordMail,
  SendResetUserPasswordMailFailure,
  SendResetUserPasswordMailSuccess,
  SigninUserFailure,
  SigninUserSuccess,
  SignupUserFailure,
  SignupUserSuccess,
  UpdateUserPassword,
  UpdateUserPasswordFailure,
  UpdateUserPasswordSuccess
} from './action';
import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { LoginStatusService } from 'src/app/core/services';

@Injectable()
export class UserAuthenticationEffects {

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly loginStatusService: LoginStatusService
  ) { }

  signupUser$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(UserAuthenticationPageConstants.SIGNUP_USER),
        switchMap((signupUserRequest: SignupUserRequest) => {
          return this.authService.signup({
            body: {
              firstName: signupUserRequest.firstName,
              lastName: signupUserRequest.lastName,
              email: signupUserRequest.email,
              password: signupUserRequest.password
            }
          }).pipe(
            map(tokens => {
              localStorage.setItem('access_token', tokens.access_token);
              localStorage.setItem('refresh_token', tokens.refresh_token);

              this.loginStatusService.setIsUserLoggedIn(true);

              this.router.navigate(['/main']);

              return new SignupUserSuccess(tokens)
            }),
            catchError(error => of(new SignupUserFailure(error)))
          )
        })
      );
  });

  signinUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticationPageConstants.SIGNIN_USER),
      switchMap((signinUserRequest: SigninUserRequest) => {
        return this.authService.signin({
          body: {
            email: signinUserRequest.email,
            password: signinUserRequest.password
          }
        }).pipe(
          tap(tokens => {
            localStorage.setItem('access_token', tokens.access_token);
            localStorage.setItem('refresh_token', tokens.refresh_token);

            this.loginStatusService.setIsUserLoggedIn(true);
          }),
          switchMap(tokens => this.authService.getUser().pipe(
            map(user => {
              this.router.navigate(['/main']);

              return new SigninUserSuccess(tokens, user);
            })
          )),
          catchError(error => of(new SigninUserFailure(error)))
        )
      })
    );
  });

  confirmUserRegistration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticationPageConstants.CONFIRM_REGISTRATION),
      switchMap(() => this.authService.confirmRegistration().pipe(
        map(user => {
          const userUpdate: Update<User> = {
            id: user.id,
            changes: { confirmed: user.confirmed }
          };

          return new ConfirmUserRegistrationSuccess(userUpdate);
        }),
        catchError(error => of(new ConfirmUserRegistrationFailure(error)))
      ))
    );
  });

  resendConfirmRegistration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticationPageConstants.RESEND_CONFIRM_REGISTRATION),
      switchMap((resendConfirmRegistrationRequest: ResendConfirmRegistration) => {
        return this.authService.resendConfirmationUserRegistration({
          email: resendConfirmRegistrationRequest.email
        }).pipe(
          map(() => new ResendConfirmRegistrationSuccess()),
          catchError(error => of(new ResendConfirmRegistrationFailure(error)))
        )
      })
    );
  });

  getUserByToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticationPageConstants.GET_USER_BY_TOKEN),
      switchMap(() => this.authService.getUser().pipe(
        map(user => {
          this.router.navigate(['/main']);

          return new GetUserByTokenSuccess(user);
        }),
        catchError(error => of(new GetUserByTokenFailure(error)))
      ))
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticationPageConstants.LOGOUT_USER),
      switchMap(() => this.authService.logout().pipe(
        map(() => {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');

          this.loginStatusService.setIsUserLoggedIn(false);

          this.router.navigate(['/login']);

          return new LogoutUserSuccess();
        }),
        catchError(error => of(new LogoutUserFailure(error)))
      ))
    );
  });

  sendResetUserPasswordMail = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticationPageConstants.SEND_RESET_USER_PASSWORD_MAIL),
      switchMap((sendResetUserPasswordMailRequest: SendResetUserPasswordMail) => {
        return this.authService.sendUpdatePasswordMail({
          body: {
            email: sendResetUserPasswordMailRequest.email
          }
        }).pipe(
          map(() => new SendResetUserPasswordMailSuccess()),
          catchError(error => of(new SendResetUserPasswordMailFailure(error)))
        )
      })
    );
  });

  updateUserPassword = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserAuthenticationPageConstants.UPDATE_USER_PASSWORD),
      switchMap((updateUserPasswordRequest: UpdateUserPassword) => this.authService.updatePassword({
        body: {
          password: updateUserPasswordRequest.password
        }
      }).pipe(
        map(() => new UpdateUserPasswordSuccess()),
        catchError(error => of(new UpdateUserPasswordFailure(error)))
      ))
    )
  });
}
