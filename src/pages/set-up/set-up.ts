import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../set-up/projectlist/projectlist';

import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'set-up',
  templateUrl: 'set-up.html'
})
export class SetUpPage {

  constructor(public navCtrl: NavController,public navParams: NavParams){

  }

  goToProjeclist(){
    this.navCtrl.push(ProjectlistPage);
  }

  ionViewDidLoad(){
    console.log('Inicio page esta cargada')
  }
}
