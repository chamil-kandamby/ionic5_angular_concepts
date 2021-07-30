import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ActiveUser } from "src/app/model/user/active-user.model";

import { UserHttpService } from "../http/http-user.service";


@Injectable({
  providedIn: 'root'
})
export class ActiveUsersData {

  private _user: ActiveUser;
  private _userSubject: BehaviorSubject<ActiveUser> = new BehaviorSubject(new ActiveUser());

  public readonly userObserver: Observable<ActiveUser> = this._userSubject.asObservable();

  public get user(): ActiveUser {
    return this._user;
  }

  constructor(
    private authHttpService: UserHttpService
  ) {
    this._user = new ActiveUser();
  }

  public load(): Promise<ActiveUser> {
    return new Promise<ActiveUser>((resolve, rejects) => {
      this.authHttpService.getUserData().subscribe((data: ActiveUser) => {
        this.setUser(data);
        resolve(this._user);
      }, () => {
        rejects(null);
      });
    });
  }

  // public signOutUser(): void {
  //   this.authHttpService.logoutUser().subscribe((data: boolean) => {
  //     if (data) {
  //       localStorage.clear();
  //       window.location.reload();
  //     }
  //   }, (error: any) => {
  //   });
  // }

  // ---- Private ----
  private setUser(user: ActiveUser) {
    this._user = user;
    this._userSubject.next(user);
  }

}
