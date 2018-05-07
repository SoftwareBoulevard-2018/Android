import { HireUserPage } from './../hire-user/hire-user';
import { Component } from '@angular/core';

import { UserData } from '../../providers/user-data';

import { ListUsersPage } from '../list-users/list-users';
import { ListCompaniesPage } from '../list-companies/list-companies';
import { SetUpPage } from '../set-up/set-up';
import { ReportsPage } from '../reports/reports';
import { CreateAccountPage } from '../create-account/create-account';
import { CreateCompanyPage } from '../create-company/create-company';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'main-page',
  templateUrl: 'main.html'
})
export class MainPage {

  user_type: string;

  constructor(
    public navCtrl: NavController, 
    public userData: UserData,
    public navParams: NavParams
  ) {
    this.user_type = navParams.get("role");
  }

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
