import { Component } from '@angular/core';

import { AlertController, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class ViewAccountPage {
  user: User;

  constructor(
    public alertCtrl: AlertController, 
    public nav: NavController, 
    public userData: UserData,
    public navParams: NavParams
  ) {

    this.user = navParams.get("u");
  }

}
