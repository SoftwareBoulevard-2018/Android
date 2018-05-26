import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
/**
 * shows and validates a form used to create a new account
 */
@Component({
  selector: 'create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountPage {
  user = new User("","","","","");
  submitted = false;
  password_confirm = "";
  //TODO: get roles from server
  roles = [ 'Project Manager', 'Analyst', 'Developer', 'Tester'];

  constructor(public navCtrl: NavController) {}

  onSubmit(form: NgForm) {
    
    this.submitted = true;

    if (form.valid) {
      //TODO: validate if password_confirm === password
      //TODO: send account to server
      this.navCtrl.pop();
    }
  }
}
