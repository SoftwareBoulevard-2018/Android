import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GenerateResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-resources',
  templateUrl: 'generate-resources.html',
})
export class GenerateResourcesPage {
  puzzlePieces: String[] = [];
  puzzle: number[][] = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectPuzzle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateResourcesPage');
  }
  
  try()
  {
    alert("Clicked");
  }

  selectPuzzle()
  {
    var i: number;
    for(i=0; i<16; i++)
    {
      var imgSrc: String = './../../assets/img/puzzles/puzzle1/'.concat('result').concat(i.toString()).concat('.png');
      this.puzzlePieces.push(imgSrc);
      console.log(this.puzzlePieces[i]);
    }

    var suffle: number[] = [3, 2, 6, 10, 1, 4, 8, 11, 15, 5, 14, 13, 7, 9, 12, 0];
    
    var k = 0;
    for(i = 0; i< 4; i++)
    {
      for(var j = 0; j < 4; j++)
      {
        this.puzzle[i][j] = suffle[k];
        k++;
      }
    }

  }
  sendPuzzle()
  {
    alert("Wrong answer");
  }

  movePiece(row: number, col: number)
  {
    var temp: any;
    alert(row.toString().concat(col.toString()));
  }
        
}

