import { UserAuthenticationApiConstants } from '../const';
import { Tokens, User } from 'src/api/models';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Update } from '@ngrx/entity';

export type UserAuthenticationApiActions =
  SignupUserSuccess
  | SignupUserFailure
  | SigninUserSuccess
  | SigninUserFailure
  | ConfirmUserRegistrationSuccess
  | ConfirmUserRegistrationFailure
  | ResendConfirmRegistrationSuccess
  | ResendConfirmRegistrationFailure
  | GetUserByTokenSuccess
  | GetUserByTokenFailure
  | LogoutUserSuccess
  | LogoutUserFailure
  | UpdateUserPasswordSuccess
  | UpdateUserPasswordFailure
  | SendResetUserPasswordMailSuccess
  | SendResetUserPasswordMailFailure
  | UpdateUserPasswordSuccess
  | UpdateUserPasswordFailure;

export class SignupUserSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.SIGNUP_USER_SUCCESS;
  constructor(readonly tokens: Tokens) { }
}
export class SignupUserFailure implements Action {
  readonly type = UserAuthenticationApiConstants.SIGNUP_USER_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class SigninUserSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.SIGNIN_USER_SUCCESS;
  constructor(
    readonly tokens: Tokens,
    readonly user: User
  ) { }
}
export class SigninUserFailure implements Action {
  readonly type = UserAuthenticationApiConstants.SIGNIN_USER_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class ConfirmUserRegistrationSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.CONFIRM_REGISTRATION_SUCCESS;
  constructor(readonly user: Update<User>) { }
}
export class ConfirmUserRegistrationFailure implements Action {
  readonly type = UserAuthenticationApiConstants.CONFIRM_REGISTRATION_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class ResendConfirmRegistrationSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.RESEND_CONFIRM_REGISTRATION_SUCCESS;
  constructor() { }
}
export class ResendConfirmRegistrationFailure implements Action {
  readonly type = UserAuthenticationApiConstants.RESEND_CONFIRM_REGISTRATION_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class GetUserByTokenSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.GET_USER_BY_TOKEN_SUCCESS;
  constructor(readonly user: User) { }
}
export class GetUserByTokenFailure implements Action {
  readonly type = UserAuthenticationApiConstants.GET_USER_BY_TOKEN_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class LogoutUserSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.LOGOUT_USER_SUCCESS;
  constructor() { }
}
export class LogoutUserFailure implements Action {
  readonly type = UserAuthenticationApiConstants.LOGOUT_USER_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class SendResetUserPasswordMailSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.SEND_RESET_USER_PASSWORD_MAIL_SUCCESS;
  constructor() { }
}
export class SendResetUserPasswordMailFailure implements Action {
  readonly type = UserAuthenticationApiConstants.SEND_RESET_USER_PASSWORD_MAIL_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class UpdateUserPasswordSuccess implements Action {
  readonly type = UserAuthenticationApiConstants.UPDATE_USER_PASSWORD_SUCCESS;
  constructor() { }
}
export class UpdateUserPasswordFailure implements Action {
  readonly type = UserAuthenticationApiConstants.UPDATE_USER_PASSWORD_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}