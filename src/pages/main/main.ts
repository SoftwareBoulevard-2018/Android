import { Component } from '@angular/core';

import { ListUsersPage } from '../list-users/list-users';
import { ListCompaniesPage } from '../list-companies/list-companies';
import { SetUpPage } from '../set-up/set-up';
import { ReportsPage } from '../reports/reports';
import { CreateAccountPage } from '../create-account/create-account';
import { CreateCompanyPage } from '../create-company/create-company';

import { Events, NavController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
/**
 * shows the cards for each user role.
 */
@Component({
  selector: 'main-page',
  templateUrl: 'main.html'
})
export class MainPage {

  user_type: string;

  constructor(
    public navCtrl: NavController, 
    public events: Events,
    public service: GeneralServiceService
  ) {
    //after log-in knows the role.
    //because of asynchrony can blink thus I'm thinking of a better implementatnion.
    this.events.subscribe('user:login', () => {
      this.user_type = this.service.user.role;
    });
  }
  //if this view is reopened we need to obtain the role.
  ionViewWillEnter() {
    this.user_type = this.service.user.role;
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

}
