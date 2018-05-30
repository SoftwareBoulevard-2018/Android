import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdatequestPage } from '../updatequest/updatequest';
import { MainPage } from '../../main/main';
import { SetUpPage } from '../set-up';


@IonicPage()
@Component({
  selector: 'page-questlist',
  templateUrl: 'questlist.html',
})
export class QuestlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToUpdatequest(){
    this.navCtrl.push(UpdatequestPage);
  }

  goToMain(){
    this.navCtrl.push(MainPage);
  }

  goToHome(){
    this.navCtrl.push(SetUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestlistPage');
  }

}
