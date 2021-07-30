import { Injectable } from '@angular/core';
import { ActiveUserData } from '../data/active-user.data';




@Injectable({
  providedIn: 'root'
})
export class ApplicationInitializerService {

  constructor(
    private activeUserData: ActiveUserData
  ) { }

  public loadApplicationData(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      Promise.all([this.activeUserData.loadUserData()]).then(([val1]) => {
        resolve(true);
      }, () => {
        resolve(false);
      });
    });
  }
}
