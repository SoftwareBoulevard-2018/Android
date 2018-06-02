import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewpuzzlePage } from '../newpuzzle/newpuzzle';
import { HttpService } from '../../../app/http.service';

@IonicPage()
@Component({
  selector: 'page-puzzlelist',
  templateUrl: 'puzzlelist.html',
})
export class PuzzlelistPage {
  puzzles: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService) {
  }
  ionViewWillEnter(){
    this.httpService.getAllPuzzles().subscribe(data => {
      this.puzzles = data['data'];
    })
  }
  goToNewpuzzle(){
    this.navCtrl.push(NewpuzzlePage);
  }

}
