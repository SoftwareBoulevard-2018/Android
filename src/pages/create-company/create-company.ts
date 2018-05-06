import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';


@Component({
  selector: 'create-company',
  templateUrl: 'create-company.html'
})
export class CreateCompanyPage {

  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      this.navCtrl.push(MainPage);
    }
  }
}
