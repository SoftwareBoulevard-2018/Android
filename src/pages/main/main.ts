import { HireUserPage } from './../hire-user/hire-user';
import { Component } from '@angular/core';

import { ListUsersPage } from '../list-users/list-users';
import { ListCompaniesPage } from '../list-companies/list-companies';
import { SetUpPage } from '../set-up/set-up';
import { ReportsPage } from '../reports/reports';
import { CreateAccountPage } from '../create-account/create-account';
import { CreateCompanyPage } from '../create-company/create-company';

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
  viewReports(){
    this.navCtrl.push(ReportsPage,{
      type: "general"
    });
  }
  viewSetUp(){
    this.navCtrl.push(SetUpPage);
  }
  createUser(){
    this.navCtrl.push(CreateAccountPage);
  }
  createCompany() {
    this.navCtrl.push(CreateCompanyPage);
  }

  hireUser(){
    this.navCtrl.push(HireUserPage);
  }

}
