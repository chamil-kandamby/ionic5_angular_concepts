import { Injectable } from '@angular/core';
import { ActiveUsersData } from '../data/user-details.data';




@Injectable({
  providedIn: 'root'
})
export class ApplicationInitializerService {

  constructor(
    private activeUsersData: ActiveUsersData
  ) { }

  public loadApplicationData(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      Promise.all([this.activeUsersData.load()]).then(([val1]) => {
        resolve(true);
      }, () => {
        resolve(false);
      });
    });
  }
}
