import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpBaseService } from './http-base.service';
import { ApiRequest } from 'src/app/model/http/api-request.model';
import { ActiveUser } from 'src/app/model/user/active-user.model';


@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends HttpBaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient, "user");
  }

  public getUserData(): Observable<ActiveUser> {
    var params: ApiRequest = {
      url: "session",
      body: null,
      searchForm: []
    };
    return this.getRequest<ActiveUser>(params).pipe(
      map((data: any) => {
        var userResponse = new ActiveUser(data);
        return userResponse;
      })
    );
  }

}
