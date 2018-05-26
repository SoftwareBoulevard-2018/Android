import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ToastController } from 'ionic-angular';

import { UserOptions } from '../../interfaces/user-options';
import { GeneralServiceService } from '../../app/general-service.service';

import { MainPage } from '../main/main';
import { HttpService } from '../../app/http.service';

/**
 * shows the login form and validates the data, shows a toast if invalid.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: ''};
  submitted = false;

  constructor(
    public navCtrl: NavController,
    public service: GeneralServiceService,
    public httpService: HttpService,
    public toastCtrl: ToastController) { 
      console.log(service.users)
    }
  /**
   * validates the received form and if correct logs in.
   * @param form login form to be validated
   */
  onLogin(form: NgForm) {
    if(!form.valid) return false;
    this.submitted = true;

    this.httpService.login(this.login.username, this.login.password).subscribe( user => {
        this.service.login(user);
        this.navCtrl.setRoot(MainPage,{
          role: user.role
        });
      },
      () => {
        let toast = this.toastCtrl.create({
          message: 'Username or password incorrect',
          duration: 3000
        });
        toast.present();
    });
  }
  
}
