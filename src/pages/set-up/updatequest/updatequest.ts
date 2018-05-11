import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionquestPage } from '../optionquest/optionquest';

@IonicPage()
@Component({
  selector: 'page-updatequest',
  templateUrl: 'updatequest.html',
})
export class UpdatequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToOptionquest(){
    this.navCtrl.push(OptionquestPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatequestPage');
  }

}
