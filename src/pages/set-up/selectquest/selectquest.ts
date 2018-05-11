import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../projectlist/projectlist';


@IonicPage()
@Component({
  selector: 'page-selectquest',
  templateUrl: 'selectquest.html',
})
export class SelectquestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToProjeclist() {
    this.navCtrl.push(ProjectlistPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectquestPage');
  }

}
