import { Component } from '@angular/core';

import { CreateAccountPage } from '../create-account/create-account';

import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'list-users',
  templateUrl: 'list-users.html'
})
export class ListUsersPage {

  constructor(
    public navCtrl: NavController,
  ) {}

  viewUsers() {
    this.navCtrl.push(ListUsersPage);
  }
  createUser(){
    this.navCtrl.push(CreateAccountPage);
  }

}
