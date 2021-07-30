import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ActiveUserData } from './data/active-user.data';
import { UserHttpService } from './http/http-user.service';


@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    UserHttpService,

    ActiveUserData
  ],
})
export class ServiceModule { }
