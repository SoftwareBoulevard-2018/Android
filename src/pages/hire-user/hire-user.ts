import { EditAccountPage } from '../edit-account/edit-account';
import { Company } from '../../models/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
import { CreateAccountPage } from '../create-account/create-account';
import { EditAccountPage } from '../edit-account/edit-account';
*/
import { ViewAccountPage } from '../account/account';

import { GeneralServiceService } from '../../app/general-service.service';
import { User } from '../../models/user';
import { HttpService } from '../../app/http.service';
import { Email } from '../../models/email';

/**
 * Generated class for the HireUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hire-user',
  templateUrl: 'hire-user.html',
})
export class HireUserPage {
  users: User[];
  companies: Company[];
  hService: HttpService;
  serv: GeneralServiceService;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService,
    public httpService: HttpService
    
  ){
    this.hService = httpService;
    this.serv = this.service;
  }
  ionViewDidEnter(){
    this.users = [];
    this.getAllUsers();
  }

  getAllUsers() {
    return this.httpService.getAllUsers().subscribe(data => this.addCompanies(data['data']));
  }
  addCompanies(users) {
    users.forEach(user => {
      this.httpService.getCompanyById(user.companyId).subscribe(company => {
        user.company = company;
        user.companyName = company.name;
        this.users.push(user);
      }, error => {
        console.log(error);
        user.company = undefined;
        user.companyName = undefined;
        this.users.push(user);
      })
    });
  }

  viewUser(user) {
    this.navCtrl.push(ViewAccountPage,{
      u: user
    });
  }

  hireUser(user) 
  {
    var us: User;
    this.serv.getCurrentUser().then((u) => {
      us = u;
      
    });


    var email = new Email('us.name', "Recruitment" , ['user.name'], "You are invited to our team, join us =D");
    console.log(email);
    //this.httpService.send(email);
  }
}
