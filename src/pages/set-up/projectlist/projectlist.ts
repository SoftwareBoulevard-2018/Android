import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewprojectPage } from '../newproject/newproject';

@IonicPage()
@Component({
  selector: 'page-projectlist',
  templateUrl: 'projectlist.html',
})
export class ProjectlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToNewproject(){
    this.navCtrl.push(NewprojectPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectlistPage');
  }

}