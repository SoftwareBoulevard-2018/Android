import { Component } from '@angular/core';

import { CreateAccountPage } from '../create-account/create-account';
import { ViewAccountPage } from '../account/account';
import { EditAccountPage } from '../edit-account/edit-account';

import { GeneralServiceService } from '../../app/general-service.service';

import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'list-users',
  templateUrl: 'list-users.html'
})
export class ListUsersPage {
  users: any;
  constructor(
    public navCtrl: NavController,
    public service: GeneralServiceService
  ) {
    this.users = service.users;
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
