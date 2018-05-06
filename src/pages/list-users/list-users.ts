import { Component } from '@angular/core';

//import { ListUsersPage } from '../list-users/list-users';

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

}
