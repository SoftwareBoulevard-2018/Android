import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestlistPage } from '../questlist/questlist';
import { Questions} from '../../../models/questions';
import { HttpService } from '../../../app/http.service';
import { NgForm } from '@angular/forms';
import { Answer} from '../../../models/answer';

@IonicPage()
@Component({
  selector: 'page-updatequest',
  templateUrl: 'updatequest.html',
})
export class UpdatequestPage {
  question:Questions;
  submitted = false;
  questions = new Questions();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpService
  ) {this.question = this.navParams.data.c;}
 
  public stringToBoolean(cadena: string){
    if(cadena == "true"){
        return true;
    }
    else{
      return false;
    }
  }

  goToQuestlist(form: NgForm,option1:string,veracity1:string,option2:string,veracity2:string,option3:string,veracity3:string,option4:string,veracity4:string, idquestion:string){
    this.submitted = true;
    console.log(this.question);
    if (form.valid) {
      
      var ans=[(new Answer(option1,this.stringToBoolean(veracity1))),(new Answer(option2,this.stringToBoolean(veracity2))),(new Answer(option3,this.stringToBoolean(veracity3))),(new Answer(option4,this.stringToBoolean(veracity4)))];
      return this.httpService.updateQuestion(this.questions,ans,idquestion).subscribe(() => {
        this.navCtrl.push(QuestlistPage);

      });

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatequestPage');
  }

}
 