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
  users: any;
  constructor(
    public navCtrl: NavController,
    public service: GeneralServiceService,
    public httpService: HttpService
  ) {
    //this.getAllUsers();
  }

  /*WIP
  getAllUsers() {
    return this.httpService.getAllUsers().subscribe(data => this.listUser(data));
  }

  listUser(data) {
    console.log(data);
    this.users = [];
    for (const value of Object.values(data.data)) {
     this.getCompanyById(value.companyId, value);
    }
  }

  getCompanyById(companyId, user) {
    return this.httpService.getCompanyById(companyId).subscribe(data => {
      user.companyName = data.name;
      user.hide_password = true;
      this.users.push({ id: user.id, createdAt: user.createdAt,
        name: user.name, username: user.username,
        password: user.password, role: user.role, companyName: user.companyName,
      hide_password: true});
      this.users2.data = this.users;
      console.log(this.users2);
    }, error => {
        user.companyName = undefined;
        user.hide_password = true;
        this.users.push({ id: user.id, createdAt: user.createdAt,
          name: user.name, username: user.username,
          password: user.password, role: user.role, companyName: user.companyName,
          hide_password: true});
        this.users2.data = this.users;
        console.log(this.users2);
      });
  }*/

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
