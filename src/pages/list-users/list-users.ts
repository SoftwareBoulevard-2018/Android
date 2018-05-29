import { Component } from '@angular/core';

import { CreateAccountPage } from '../create-account/create-account';
import { ViewAccountPage } from '../account/account';
import { EditAccountPage } from '../edit-account/edit-account';

import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';

import { NavController } from 'ionic-angular';

/**
 * shows a list with all users.
 * 
 * also shows a FAB to create a new user and each user has
 * a edit button and can be viewed by taping in the name.
 */
@Component({
  selector: 'list-users',
  templateUrl: 'list-users.html'
})
export class ListUsersPage {
  users: any = [];
  constructor(
    public navCtrl: NavController,
    public service: GeneralServiceService,
    public httpService: HttpService
  ) {
    
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
  createUser(){
    this.navCtrl.push(CreateAccountPage);
  }
  editUser(user) {
    this.navCtrl.push(EditAccountPage, {
      u: user
    })
  }

}
