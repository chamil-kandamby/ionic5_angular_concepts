import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginAccessGuard } from './core/guards/login-access.guard';
import { SystemAccessGuard } from './core/guards/system-access.guard';


const routes: Routes = [
  { path: "", redirectTo: "app", pathMatch: "full" },
  // { path: "*", redirectTo: "", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [LoginAccessGuard]
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [SystemAccessGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
