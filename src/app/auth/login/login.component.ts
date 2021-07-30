import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoginRequest } from 'src/app/model/auth/login-request.model';
import { ActiveUserData } from 'src/app/service/data/active-user.data';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean = false;

  get formController() { return this.loginForm.controls; }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private activeUserData: ActiveUserData
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    this.isSubmitted = true;

    if (!this.loginForm.valid) {
      return;
    }

    const loading = await this.loadingController.create();
    await loading.present();

    var loginObj: LoginRequest = {
      email: this.formController.email.value,
      password: this.formController.password.value
    };

    this.authService.LoginUser(loginObj).subscribe(async (data) => {
      this.activeUserData.loadUserData().then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/app', { replaceUrl: true });
      }).catch(() => {
        loading.dismiss();
      });

    }, async (res) => {
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Login failed',
        message: res.error.error,
        buttons: ['OK'],
      });

      await alert.present();
    });
    // this.authService.login(this.credentials.value).subscribe(
    //   async (res) => {
    //     await loading.dismiss();
    //     this.router.navigateByUrl('/tabs', { replaceUrl: true });
    //   },
    //   async (res) => {
    //     await loading.dismiss();
    //     const alert = await this.alertController.create({
    //       header: 'Login failed',
    //       message: res.error.error,
    //       buttons: ['OK'],
    //     });

    //     await alert.present();
    //   }
    // );
  }

  // Easy access for form fields
  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

}
