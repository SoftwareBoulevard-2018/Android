import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ToastController, ModalController } from 'ionic-angular';

import { UserOptions } from '../../interfaces/user-options';
import { GeneralServiceService } from '../../app/general-service.service';

import { MainPage } from '../main/main';
import { ConfigurationPage } from '../configuration/configuration';
import { HttpService } from '../../app/http.service';

/**
 * shows the login form and validates the data, shows a toast if invalid.
 * also shows the curren apiURL and a button to change it
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: ''};
  submitted = false;
  api = HttpService.apiURL;

  constructor(
    public navCtrl: NavController,
    public service: GeneralServiceService,
    public httpService: HttpService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) { 
    }
  /**
   * validates the received form and if correct logs in.
   * @param form login form to be validated
   */
  onLogin(form: NgForm) {
    if(!form.valid) return false;
    this.submitted = true;

    this.httpService.login(this.login.username, this.login.password).subscribe( user => {
        this.service.login(user).then(()=>{
          this.navCtrl.setRoot(MainPage);
        });
      },
      (err) => {
        let toast = this.toastCtrl.create({
          message: err,
          duration: 3000
        });
        toast.present();
    });
  }

  configuration() {
    let modal = this.modalCtrl.create(ConfigurationPage);
    modal.present();
    modal.onWillDismiss(()=>{
      this.api = HttpService.apiURL
    })
  }
  
  
}
