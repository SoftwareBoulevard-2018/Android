import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
import { CreateAccountPage } from '../create-account/create-account';
import { EditAccountPage } from '../edit-account/edit-account';
*/
import { ViewAccountPage } from '../account/account';

import { GeneralServiceService } from '../../app/general-service.service';
import { User } from '../../models/user';
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
  users: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService
  ){
    this.users = service.users;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HireUserPage');
  }

  viewUser(user) {
    this.navCtrl.push(ViewAccountPage,{
      u: user
    });
  }

  hireUser(user: User)
  {
    var out = user.name.concat("\n").concat(user.role);
    alert(out);
  }
}
