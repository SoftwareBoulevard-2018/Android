/**
 * shows the login form and validates the data
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ToastController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { GeneralServiceService } from '../../app/general-service.service';

import { MainPage } from '../main/main';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: ''};
  submitted = false;

  constructor(
    public navCtrl: NavController, 
    public userData: UserData,
    public service: GeneralServiceService,
    public toastCtrl: ToastController) { 
      console.log(service.users)
    }
  /**
   * validates the received form and if correct logs in.
   * @param form login form to be validated
   */
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      let found = false;
      this.service.users.forEach(user => {
        if(this.login.username === user.username && 
          this.login.password == user.password){
            found = true;
            this.userData.login(this.login.username,user.role);
            this.navCtrl.setRoot(MainPage,{
              role: user.role
            });
          }
      })
      if(!found){
        let toast = this.toastCtrl.create({
          message: 'Username or password incorrect',
          duration: 3000
        });
        toast.present();
      }
      
    }
  }
}
