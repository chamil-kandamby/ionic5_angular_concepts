import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationInitializerService } from './service/initializer/app-initializer.service';
import { ServiceModule } from './service/service.module';


export function applicationInitializer(appInitService: ApplicationInitializerService) {
  return () => appInitService.loadApplicationData();
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    ServiceModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: APP_INITIALIZER,
      useFactory: applicationInitializer,
      deps: [ApplicationInitializerService],
      multi: true
    },],
  bootstrap: [AppComponent],
})
export class AppModule { }
