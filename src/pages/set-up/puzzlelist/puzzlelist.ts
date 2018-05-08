import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewpuzzlePage } from '../newpuzzle/newpuzzle';
import { SetUpPage } from '../set-up';

@IonicPage()
@Component({
  selector: 'page-puzzlelist',
  templateUrl: 'puzzlelist.html',
})
export class PuzzlelistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToNewpuzzle(){
    this.navCtrl.push(NewpuzzlePage);
  }

  goToHome(){
    this.navCtrl.push(SetUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuzzlelistPage');
  }

}
