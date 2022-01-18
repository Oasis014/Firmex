import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: new HttpParams(),
    pbserve: 'response' as const,
    responseType: 'json' as const
  }

  get(url: string, params = null): Observable<any> {
    if ( null === params ) {
      this.httpOptions.params = null;
    } else {
      let httpParams = new HttpParams();
      for ( const item in params ) {
        httpParams = httpParams.append(item, params[item]);
      }
      this.httpOptions.params = httpParams;
    }

    return this.httpClient.get<any>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  post(url: string, data: any, params = null): Observable<any> {
    if ( null === params ) {
      this.httpOptions.params = null;
    } else {
      let httpParams = new HttpParams();
      for ( const item in params ) {
        httpParams = httpParams.append(item, params[item]);
      }
      this.httpOptions.params = httpParams;
    }

    return this.httpClient.post<any>(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error(error);
    if ( error instanceof ErrorEvent ) {
      console.error('An error occurred: ', error['message']);
    }

    const resp = {
      errorCode: error.error.errorCode,
      statusCode: error.error.httpStatusCode
    }

    return throwError(resp);
  }

}