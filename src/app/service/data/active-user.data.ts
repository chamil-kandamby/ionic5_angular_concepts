import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { ActiveUser } from 'src/app/model/user/active-user.model';
import { UserHttpService } from '../http/http-user.service';

@Injectable({ providedIn: 'root' })
export class ActiveUserData {

  private _user: ActiveUser;
  private _userSubject: BehaviorSubject<ActiveUser> = new BehaviorSubject(new ActiveUser());

  public readonly userObserver: Observable<ActiveUser> = this._userSubject.asObservable();

  public get user(): ActiveUser {
    return this._user;
  }

  constructor(
    public userHttpService: UserHttpService
  ) {
    this._user = new ActiveUser();
  }

  public loadUserData(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.userHttpService.getUserData().subscribe(async (data) => {
        this.serUserData(data);
        resolve(true);
      }, async (err) => {
        reject(false);
      });
    })
  }

  private serUserData(userData: ActiveUser) {
    this._user = userData;
    this._userSubject.next(userData);
  }
}
