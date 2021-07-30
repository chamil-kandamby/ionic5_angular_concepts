import { Component } from '@angular/core';
import { ActiveUser } from 'src/app/model/user/active-user.model';
import { ActiveUserData } from 'src/app/service/data/active-user.data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  activeUser: ActiveUser;

  constructor(
    activeUserData: ActiveUserData
  ) {
    activeUserData.userObserver.subscribe(data => {
      this.activeUser = data;
    });
  }

}
