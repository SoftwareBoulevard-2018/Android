import { Component } from '@angular/core';

import { ListUsersPage } from '../list-users/list-users';
import { ListCompaniesPage } from '../list-companies/list-companies';
import { SetUpPage } from '../set-up/set-up';

import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'main-page',
  templateUrl: 'main.html'
})
export class MainPage {
  //TODO: get user_type
  user_type = 'Game Administrator';

  constructor(
    public navCtrl: NavController,
  ) {}

  viewUsers() {
    this.navCtrl.push(ListUsersPage);
  }
  viewCompanies() {
    this.navCtrl.push(ListCompaniesPage);
  }
  viewSetUp(){
    this.navCtrl.push(SetUpPage);
  }

}
