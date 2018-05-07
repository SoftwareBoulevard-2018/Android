import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

@Component({
  selector: 'create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountPage {
  user = new User("","","","","");
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //TODO: send company to server
      //this.userData.signup(this.signup.username);
      this.navCtrl.pop();
    }
  }
}
