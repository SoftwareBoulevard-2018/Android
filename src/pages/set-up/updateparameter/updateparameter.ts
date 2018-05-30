import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../../main/main';
@Component({
  selector: 'updateparameter',
  templateUrl: 'updateparameter.html'
})
export class UpdateparameterPage {

  constructor(public navCtrl: NavController,public navParams: NavParams){

  }

  goToMain(){
    this.navCtrl.push(MainPage);
  }


  ionViewDidLoad(){
    console.log('Inicio page esta cargada')
  }
}
