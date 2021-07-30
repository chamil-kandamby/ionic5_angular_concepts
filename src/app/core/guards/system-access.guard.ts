import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveUserData } from 'src/app/service/data/active-user.data';

@Injectable({
  providedIn: 'root'
})
export class SystemAccessGuard implements CanActivate {

  constructor(
    private router: Router,
    private activeUserData: ActiveUserData
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.activeUserData.user.id > 0) {
      return true;
    } else {
      this.router.navigateByUrl("auth/login");
      return false;
    }

  }

}
