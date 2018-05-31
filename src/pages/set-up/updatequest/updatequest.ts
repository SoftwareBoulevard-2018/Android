import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestlistPage } from '../questlist/questlist';
import { Questions} from '../../../models/questions';
import { HttpService } from '../../../app/http.service';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-updatequest',
  templateUrl: 'updatequest.html',
})
export class UpdatequestPage {
  
  submitted = false;
  questions = new Questions();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpService
  ) {}

  goToQuestlist(form: NgForm){
    this.submitted = true;

    if (form.valid) {

      return this.httpService.createQuestion(this.questions).subscribe(() => {
        this.navCtrl.push(QuestlistPage);

      });

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatequestPage');
  }

}
 