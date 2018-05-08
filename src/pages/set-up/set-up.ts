import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../set-up/projectlist/projectlist';
import { QuestlistPage } from '../set-up/questlist/questlist';
import { PuzzlelistPage } from '../set-up/puzzlelist/puzzlelist';

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
  goToQuestlist(){
    this.navCtrl.push(QuestlistPage);
  }

  goToPuzzlelist(){
    this.navCtrl.push(PuzzlelistPage);
  }
}
