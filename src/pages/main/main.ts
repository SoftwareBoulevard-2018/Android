import { Component } from '@angular/core';

import { ListUsersPage } from '../list-users/list-users';
import { ListCompaniesPage } from '../list-companies/list-companies';
import { SetUpPage } from '../set-up/set-up';
import { ReportsPage } from '../reports/reports';
import { CreateAccountPage } from '../create-account/create-account';
import { CreateCompanyPage } from '../create-company/create-company';

import { Events, NavController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
/**
 * shows the cards for each user role.
 */
@Component({
  selector: 'main-page',
  templateUrl: 'main.html'
})
export class MainPage {
  users:number;
  companies:number;
  user_type: string;

  constructor(
    public navCtrl: NavController, 
    public events: Events,
    public service: GeneralServiceService,
    public httpService: HttpService
  ) { }
  //if this view is reopened we need to obtain the role.
  ionViewWillEnter() {
    this.service.getCurrentUser().then((user) => {
      this.user_type = user.role;
    });
    
    this.httpService.getReports().subscribe(report => {
      this.users = report['users'];
      this.companies = report['companies'];
    })
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
