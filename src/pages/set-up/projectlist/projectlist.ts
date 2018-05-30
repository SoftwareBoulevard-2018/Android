import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewprojectPage } from '../newproject/newproject';
import { MainPage } from '../../main/main';
import { SetUpPage } from '../set-up';

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

  goToMain(){
    this.navCtrl.push(MainPage);
  }

  goToHome(){
    this.navCtrl.push(SetUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectlistPage');
  }

}