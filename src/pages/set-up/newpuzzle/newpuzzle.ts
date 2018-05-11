import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PuzzlelistPage } from '../puzzlelist/puzzlelist';


@IonicPage()
@Component({
  selector: 'page-newpuzzle',
  templateUrl: 'newpuzzle.html',
})
export class NewpuzzlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPuzzlelist(){
    this.navCtrl.push(PuzzlelistPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpuzzlePage');
  }

}
