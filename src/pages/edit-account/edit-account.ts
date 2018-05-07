import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

@Component({
  selector: 'edit-account',
  templateUrl: 'edit-account.html'
})
export class EditAccountPage {
  user: User;
  submitted = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.user = this.navParams.data.u;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.signup(this.signup.username);
      this.navCtrl.pop();
    }
  }
}
