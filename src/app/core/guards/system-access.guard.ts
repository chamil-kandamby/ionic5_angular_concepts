import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveUsersData } from 'src/app/service/data/user-details.data';

@Injectable({
  providedIn: 'root'
})
export class SystemAccessGuard implements CanActivate {

  constructor(
    private router: Router,
    private activeUsersData: ActiveUsersData
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.activeUsersData.user.id > 0) {
      return true;
    } else {
      this.router.navigateByUrl("auth/login");
      return false;
    }

  }

}
