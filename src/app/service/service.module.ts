import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ActiveUsersData } from './data/user-details.data';

import { UserHttpService } from './http/http-user.service';


@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    UserHttpService,

    ActiveUsersData
  ],
})
export class ServiceModule { }
