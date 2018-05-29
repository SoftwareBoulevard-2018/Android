import { Component } from '@angular/core';

import { AlertController, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';



/**
 * shows an account received in param "u"
 */
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class ViewAccountPage {
  user: User;

  constructor(
    public alertCtrl: AlertController, 
    public nav: NavController, 

    public navParams: NavParams
  ) {

    this.user = navParams.get("u");
  }

}
