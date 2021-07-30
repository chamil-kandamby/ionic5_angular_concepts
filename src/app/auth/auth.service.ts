import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginRequest } from '../model/auth/login-request.model';
import { LoginResponse } from '../model/auth/login-response.model';
import { ApiRequest } from '../model/http/api-request.model';
import { UserHttpService } from '../service/http/http-user.service';

@Injectable()
export class AuthService {
  constructor(
    private userHttpService: UserHttpService
  ) { }

  public LoginUser(user: LoginRequest): Observable<LoginResponse> {
    var params: ApiRequest = {
      url: "session",
      body: user,
      searchForm: []
    };
    return this.userHttpService.postRequest<LoginResponse>(params).pipe(
      map((data: any) => {
        var userResponse = new LoginResponse(data);
        if (userResponse.sessionToken) {
          this.storeSessionToken(userResponse.sessionToken);
        }
        return userResponse;
      })
    );
  }

  private storeSessionToken(token: string) {
    localStorage.setItem('sessionToken', token);
  }
}
