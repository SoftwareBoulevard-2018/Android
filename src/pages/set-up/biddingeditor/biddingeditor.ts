import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../projectlist/projectlist';


@IonicPage()
@Component({
  selector: 'page-biddingeditor',
  templateUrl: 'biddingeditor.html',
})
export class BiddingeditorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToProjeclist(){
    this.navCtrl.push(ProjectlistPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiddingeditorPage');
  }

}
