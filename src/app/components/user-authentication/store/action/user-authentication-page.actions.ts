import { Action } from '@ngrx/store';
import { UserAuthenticationPageConstants } from '../const';

export class SignupUser implements Action {
  readonly type = UserAuthenticationPageConstants.SIGNUP_USER;
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly email: string,
    readonly password: string
  ) { }
}

export class SigninUser implements Action {
  readonly type = UserAuthenticationPageConstants.SIGNIN_USER;
  constructor(readonly email: string, readonly password: string) { }
}

export class ConfirmUserRegistration implements Action {
  readonly type = UserAuthenticationPageConstants.CONFIRM_REGISTRATION;
  constructor() { }
}

export class ResendConfirmRegistration implements Action {
  readonly type = UserAuthenticationPageConstants.RESEND_CONFIRM_REGISTRATION;
  constructor(readonly email: string) { }
}

export class GetUserByToken implements Action {
  readonly type = UserAuthenticationPageConstants.GET_USER_BY_TOKEN;
  constructor() { }
}

export class LogoutUser implements Action {
  readonly type = UserAuthenticationPageConstants.LOGOUT_USER;
  constructor() { }
}

export class SendResetUserPasswordMail implements Action {
  readonly type = UserAuthenticationPageConstants.SEND_RESET_USER_PASSWORD_MAIL;
  constructor(readonly email: string) { }
}

export class UpdateUserPassword implements Action {
  readonly type = UserAuthenticationPageConstants.UPDATE_USER_PASSWORD;
  constructor(readonly password: string) { }
}