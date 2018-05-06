import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ToastController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { MainPage } from '../main/main';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: ''};
  submitted = false;

  constructor(
    public navCtrl: NavController, 
    public userData: UserData,
    public toastCtrl: ToastController) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //validacion quemada
      if(this.login.username === "1"){
        this.userData.login(this.login.username);
        this.navCtrl.setRoot(MainPage);
      } else{
        let toast = this.toastCtrl.create({
          message: 'Username or password incorrect',
          duration: 3000
        });
        toast.present();
      }
      
    }
  }
}
