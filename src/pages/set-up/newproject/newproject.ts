import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BiddingeditorPage} from '../biddingeditor/biddingeditor';
import {InstanteditorPage} from '../instanteditor/instanteditor';
import {ElementRef} from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-newproject',
  templateUrl: 'newproject.html',
})
export class NewprojectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToBiddingeditor(){
    this.navCtrl.push(BiddingeditorPage);    
  }

  goToInstanteditor(){
    this.navCtrl.push(InstanteditorPage);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewprojectPage');
  }

}
