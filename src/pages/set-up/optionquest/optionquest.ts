import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestlistPage } from '../questlist/questlist';

@IonicPage()
@Component({
  selector: 'page-optionquest',
  templateUrl: 'optionquest.html',
})
export class OptionquestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToQuestlist(){
    this.navCtrl.push(QuestlistPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionquestPage');
  }

}
