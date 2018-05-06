import { TestDataProvider } from './../../providers/test-data/test-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-user',
  templateUrl: 'home-user.html',
})
export class HomeUserPage {
  displayName: String; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public TestDataProvider: TestDataProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeUserPage');
    this.getDisplayName();
  }

  getDisplayName()
  {
    this.displayName = this.TestDataProvider.selectDisplayName();
  }


}
