import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../set-up/projectlist/projectlist';
import { QuestlistPage } from '../set-up/questlist/questlist';
import { PuzzlelistPage } from '../set-up/puzzlelist/puzzlelist';
import { NewprojectPage } from '../set-up/newproject/newproject';
import { NewpuzzlePage } from '../set-up/newpuzzle/newpuzzle';
import { UpdatequestPage } from '../set-up/updatequest/updatequest';
import { CreatequestPage } from '../set-up/createquest/createquest';
import { UpdateparameterPage } from '../set-up/updateparameter/updateparameter';



@Component({
  selector: 'set-up',
  templateUrl: 'set-up.html'
})
export class SetUpPage {

  constructor(public navCtrl: NavController,public navParams: NavParams){

  }

  goToProjectlist(){
    this.navCtrl.push(ProjectlistPage);
  }
  goToQuestlist(){
    this.navCtrl.push(QuestlistPage);
  }

  goToPuzzlelist(){
    this.navCtrl.push(PuzzlelistPage);
  }

  goToNewproject(){
    this.navCtrl.push(NewprojectPage);
  }

  goToNewpuzzle(){
    this.navCtrl.push(NewpuzzlePage);
  }

  goToCreatequest(){
    this.navCtrl.push(CreatequestPage);
  }

  goToUpdatequest(){
    this.navCtrl.push(UpdatequestPage);
  }

  goToParameterlist(){
    this.navCtrl.push(UpdateparameterPage);
  }


  ionViewDidLoad(){
    console.log('Inicio page esta cargada')
  }
}
