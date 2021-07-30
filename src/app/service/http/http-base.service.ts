
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

import { ApiRequest } from 'src/app/model/http/api-request.model';


export class HttpBaseService {

  private apiUrl: string = '';

  constructor(private httpClient: HttpClient, private serviceEndpoint: string) {
    this.apiUrl = environment.apiUrl + serviceEndpoint;
  }

  public getRequest<T>(getParams: ApiRequest): Observable<T> {
    return this.httpClient.get<T>(this.getFullURL(getParams), {
      headers: this.getHttpHeaders(),
    });
  }

  public postRequest<T>(postParams: ApiRequest): Observable<T> {
    var body: Object = postParams.body ? postParams.body : {};
    return this.httpClient.post<T>(this.getFullURL(postParams), body, {
      headers: this.getHttpHeaders()
    });
  }

  public putRequest<T>(putParams: ApiRequest): Observable<T> {
    var body: Object = putParams.body ? putParams.body : {};
    return this.httpClient.put<T>(this.getFullURL(putParams), body, {
      headers: this.getHttpHeaders()
    });
  }

  public deleteRequest<T>(deleteParams: ApiRequest): Observable<T> {
    return this.httpClient.delete<T>(this.getFullURL(deleteParams), {
      headers: this.getHttpHeaders(),
    });
  }

  public postEvent<T>(postParams: ApiRequest): Observable<HttpEvent<T>> {
    var body: Object = postParams.body ? postParams.body : {};
    return this.httpClient.post<T>(this.getFullURL(postParams), body, {
      headers: this.getHttpHeaders(),
      reportProgress: true,
      observe: "events"
    });
  }

  // ----- Private ----
  private getFullURL(params: ApiRequest): string {
    var url = this.apiUrl + "/" + params.url;
    var getParams: string = "";
    if (params.searchForm && params.searchForm.length > 0) {
      params.searchForm.forEach(element => {
        if (getParams != "") {
          getParams = getParams + "&"
        }
        getParams = getParams + element.key + "=" + element.value
      });
    }
    return url + (getParams == "" ? "" : "?" + getParams);
  }

  private getHttpHeaders(): HttpHeaders {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('X-DreamFactory-API-Key', environment.apiKey);
    var sessionToken = this.getSessionToken();
    if (sessionToken && sessionToken != null) {
      headers = headers.set('X-DreamFactory-Session-Token', sessionToken);
    }
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  private getSessionToken() {
    return localStorage.getItem('sessionToken');
  }
}
