import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import {HttpService} from '../../app/http.service';

/**
 * shows and validates a form used to update an account
 */
@Component({
  selector: 'edit-account',
  templateUrl: 'edit-account.html'
})
export class EditAccountPage {
  user: User;
  submitted = false;
  //TODO: get roles from server
  roles = [ 'Project Manager', 'Analyst', 'Developer', 'Tester'];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) {
    this.user = this.navParams.data.u;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      return this.httpService.updateUser(this.user, this.user.id).subscribe(() => {
        this.navCtrl.pop();
      });
      
    }
  }
}
 