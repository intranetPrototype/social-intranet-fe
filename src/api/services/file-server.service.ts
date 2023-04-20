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


@Injectable({
  providedIn: 'root',
})
export class FileServerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getFileFromFileServer
   */
  static readonly GetFileFromFileServerPath = '/file-server/{fileName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFileFromFileServer()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFileFromFileServer$Response(params: {
    fileName: string;
  },
    context?: HttpContext

  ): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, FileServerService.GetFileFromFileServerPath, 'get');
    if (params) {
      rb.path('fileName', params.fileName, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFileFromFileServer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFileFromFileServer(params: {
    fileName: string;
  },
    context?: HttpContext

  ): Observable<Blob> {

    return this.getFileFromFileServer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation getProfilePictures
   */
  static readonly GetProfilePicturesPath = '/file-server/profile-pictures';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfilePictures()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfilePictures$Response(params?: {
  },
    context?: HttpContext

  ): Observable<StrictHttpResponse<{
    'userId'?: number;
    'profilePicture'?: Blob;
  }>> {

    const rb = new RequestBuilder(this.rootUrl, FileServerService.GetProfilePicturesPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
          'userId'?: number;
          'profilePicture'?: Blob;
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfilePictures$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfilePictures(params?: {
  },
    context?: HttpContext

  ): Observable<{
    'userId'?: number;
    'profilePicture'?: Blob;
  }> {

    return this.getProfilePictures$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
        'userId'?: number;
        'profilePicture'?: Blob;
      }>) => r.body as {
        'userId'?: number;
        'profilePicture'?: Blob;
      })
    );
  }

}
