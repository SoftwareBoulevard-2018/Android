import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../projectlist/projectlist';
@IonicPage()
@Component({
  selector: 'page-instanteditor',
  templateUrl: 'instanteditor.html',
})
export class InstanteditorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 

  goToProjeclist(){
    this.navCtrl.push(ProjectlistPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InstanteditorPage');
  }

}