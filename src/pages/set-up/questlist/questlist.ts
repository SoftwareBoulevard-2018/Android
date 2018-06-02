import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdatequestPage } from '../updatequest/updatequest';
import { MainPage } from '../../main/main';
import { SetUpPage } from '../set-up';
import { HttpService } from '../../../app/http.service';



@IonicPage()
@Component({
  selector: 'page-questlist',
  templateUrl: 'questlist.html',
})
export class QuestlistPage {

  questions: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpService

  ) {
  }

  goToUpdatequest(question){
    this.navCtrl.push(UpdatequestPage,{c:question});
  }

  goToMain(){
    this.navCtrl.push(MainPage);
  }

  goToHome(){
    this.navCtrl.push(SetUpPage);
  }

  ionViewWillEnter(){
    this.httpService.getAllQuestions().subscribe(data => {
  
      this.questions = data['data']
    })
    this.httpService.getAllQuestions().subscribe(data => {
      this.questions = data['data']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestlistPage');
  }

}
 