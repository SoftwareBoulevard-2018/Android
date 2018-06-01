
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestlistPage } from '../questlist/questlist';
import { Questions} from '../../../models/questions';
import { Answer} from '../../../models/answer';
import { HttpService } from '../../../app/http.service';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-createquest',
  templateUrl: 'createquest.html',
})
export class CreatequestPage {
  
  submitted = false;
  questions = new Questions();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpService
  ) {}
  public stringToBoolean(cadena: string){
    if(cadena == "true"){
        return true;
    }
    else{
      return false;
    }
  }
  goToQuestlist(form: NgForm,option1 : string,veracity1 : string,option2 : string,veracity2 : string,option3 : string,veracity3 : string,option4 : string,veracity4 : string){
    console.log(form);
    this.submitted = true;
    var ans=[(new Answer(option1,this.stringToBoolean(veracity1))),(new Answer(option2,this.stringToBoolean(veracity2))),(new Answer(option3,this.stringToBoolean(veracity3))),(new Answer(option4,this.stringToBoolean(veracity4)))];
    console.log(ans);
    if (form.valid) {
      return this.httpService.createQuestion(this.questions,ans).subscribe(() => {
        this.navCtrl.push(QuestlistPage);

      });

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuestPage');
  }

}
 