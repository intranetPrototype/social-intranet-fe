/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SendUpdatePasswordMailRequest } from '../models/send-update-password-mail-request';
import { SigninUserRequest } from '../models/signin-user-request';
import { SignupUserRequest } from '../models/signup-user-request';
import { Tokens } from '../models/tokens';
import { UpdateUserEmailRequest } from '../models/update-user-email-request';
import { UpdateUserPasswordRequest } from '../models/update-user-password-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserByEmail
   */
  static readonly GetUserByEmailPath = '/user/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail$Response(params: {
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetUserByEmailPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByEmail(params: {
    email: string;
    context?: HttpContext
  }
): Observable<User> {

    return this.getUserByEmail$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation getUser
   */
  static readonly GetUserPath = '/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetUserPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser(params?: {
    context?: HttpContext
  }
): Observable<User> {

    return this.getUser$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation signup
   */
  static readonly SignupPath = '/signup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signup$Response(params: {
    context?: HttpContext
    body: SignupUserRequest
  }
): Observable<StrictHttpResponse<Tokens>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.SignupPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tokens>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signup(params: {
    context?: HttpContext
    body: SignupUserRequest
  }
): Observable<Tokens> {

    return this.signup$Response(params).pipe(
      map((r: StrictHttpResponse<Tokens>) => r.body as Tokens)
    );
  }

  /**
   * Path part for operation signin
   */
  static readonly SigninPath = '/signin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `signin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signin$Response(params: {
    context?: HttpContext
    body: SigninUserRequest
  }
): Observable<StrictHttpResponse<Tokens>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.SigninPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tokens>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `signin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  signin(params: {
    context?: HttpContext
    body: SigninUserRequest
  }
): Observable<Tokens> {

    return this.signin$Response(params).pipe(
      map((r: StrictHttpResponse<Tokens>) => r.body as Tokens)
    );
  }

  /**
   * Path part for operation confirmRegistration
   */
  static readonly ConfirmRegistrationPath = '/confirm-registration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirmRegistration()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmRegistration$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ConfirmRegistrationPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `confirmRegistration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmRegistration(params?: {
    context?: HttpContext
  }
): Observable<User> {

    return this.confirmRegistration$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation resendConfirmationUserRegistration
   */
  static readonly ResendConfirmationUserRegistrationPath = '/confirm-registration/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resendConfirmationUserRegistration()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendConfirmationUserRegistration$Response(params: {
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ResendConfirmationUserRegistrationPath, 'post');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resendConfirmationUserRegistration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendConfirmationUserRegistration(params: {
    email: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.resendConfirmationUserRegistration$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation logout
   */
  static readonly LogoutPath = '/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.LogoutPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.logout$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateEmail
   */
  static readonly UpdateEmailPath = '/user/email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEmail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmail$Response(params: {
    context?: HttpContext
    body: UpdateUserEmailRequest
  }
): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.UpdateEmailPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateEmail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmail(params: {
    context?: HttpContext
    body: UpdateUserEmailRequest
  }
): Observable<User> {

    return this.updateEmail$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation updatePassword
   */
  static readonly UpdatePasswordPath = '/user/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePassword$Response(params: {
    context?: HttpContext
    body: UpdateUserPasswordRequest
  }
): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.UpdatePasswordPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePassword(params: {
    context?: HttpContext
    body: UpdateUserPasswordRequest
  }
): Observable<User> {

    return this.updatePassword$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation sendUpdatePasswordMail
   */
  static readonly SendUpdatePasswordMailPath = '/user/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendUpdatePasswordMail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendUpdatePasswordMail$Response(params: {
    context?: HttpContext
    body: SendUpdatePasswordMailRequest
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.SendUpdatePasswordMailPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sendUpdatePasswordMail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendUpdatePasswordMail(params: {
    context?: HttpContext
    body: SendUpdatePasswordMailRequest
  }
): Observable<void> {

    return this.sendUpdatePasswordMail$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation refreshTokens
   */
  static readonly RefreshTokensPath = '/refresh';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshTokens()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshTokens$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Tokens>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.RefreshTokensPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tokens>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `refreshTokens$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshTokens(params?: {
    context?: HttpContext
  }
): Observable<Tokens> {

    return this.refreshTokens$Response(params).pipe(
      map((r: StrictHttpResponse<Tokens>) => r.body as Tokens)
    );
  }

  /**
   * Path part for operation deleteUser
   */
  static readonly DeleteUserPath = '/delete/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser$Response(params: {
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.DeleteUserPath, 'delete');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser(params: {
    email: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.deleteUser$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
