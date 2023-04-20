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

import { Profile } from '../models/profile';
import { UpdateProfileRequest } from '../models/update-profile-request';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserProfile
   */
  static readonly GetUserProfilePath = '/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Profile>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.GetUserProfilePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Profile>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile(params?: {
  },
  context?: HttpContext

): Observable<Profile> {

    return this.getUserProfile$Response(params,context).pipe(
      map((r: StrictHttpResponse<Profile>) => r.body as Profile)
    );
  }

  /**
   * Path part for operation updateProfile
   */
  static readonly UpdateProfilePath = '/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile$Response(params: {
    body: UpdateProfileRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Profile>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.UpdateProfilePath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Profile>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfile(params: {
    body: UpdateProfileRequest
  },
  context?: HttpContext

): Observable<Profile> {

    return this.updateProfile$Response(params,context).pipe(
      map((r: StrictHttpResponse<Profile>) => r.body as Profile)
    );
  }

  /**
   * Path part for operation searchUserProfile
   */
  static readonly SearchUserProfilePath = '/profile/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchUserProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserProfile$Response(params: {
    searchString: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<any>>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.SearchUserProfilePath, 'get');
    if (params) {
      rb.query('searchString', params.searchString, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<any>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchUserProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchUserProfile(params: {
    searchString: string;
  },
  context?: HttpContext

): Observable<Array<any>> {

    return this.searchUserProfile$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<any>>) => r.body as Array<any>)
    );
  }

  /**
   * Path part for operation uploadCoverPhoto
   */
  static readonly UploadCoverPhotoPath = '/profile/upload/cover-photo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadCoverPhoto()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadCoverPhoto$Response(params: {
    body: {
'file'?: Blob;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Profile>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.UploadCoverPhotoPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Profile>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadCoverPhoto$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadCoverPhoto(params: {
    body: {
'file'?: Blob;
}
  },
  context?: HttpContext

): Observable<Profile> {

    return this.uploadCoverPhoto$Response(params,context).pipe(
      map((r: StrictHttpResponse<Profile>) => r.body as Profile)
    );
  }

  /**
   * Path part for operation uploadProfilePicture
   */
  static readonly UploadProfilePicturePath = '/profile/upload/profile-picture';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadProfilePicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadProfilePicture$Response(params: {
    body: {
'file'?: Blob;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Profile>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.UploadProfilePicturePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Profile>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadProfilePicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadProfilePicture(params: {
    body: {
'file'?: Blob;
}
  },
  context?: HttpContext

): Observable<Profile> {

    return this.uploadProfilePicture$Response(params,context).pipe(
      map((r: StrictHttpResponse<Profile>) => r.body as Profile)
    );
  }

}
