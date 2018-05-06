import { Component } from '@angular/core';

import { ListUsersPage } from '../list-users/list-users';

import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'main-page',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(
    public navCtrl: NavController,
  ) {}

  viewUsers() {
    this.navCtrl.push(ListUsersPage);
  }

}
