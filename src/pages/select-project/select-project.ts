import { InstantProject } from './../../models/instantProject';
import { BiddingProject } from './../../models/biddingProject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
/**
 * Generated class for the SelectProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-project',
  templateUrl: 'select-project.html',
})
export class SelectProjectPage {
  instP: InstantProject[] = [];
  bidP: BiddingProject[] = [];


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService) {
      this.instP = service.InstProjects;
      this.bidP = service.bidProjects;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectProjectPage');
  }

  viewProjectInfo(p: InstantProject)
  {
    var info = "Instant Project Information".concat("\n"
    ).concat("Id: ").concat(p.project_id.toString()).concat("\n").concat("Name: "
    ).concat(p.project_name).concat("\n").concat("Reward k: ").concat(p.rewarded_k.toString()
    ).concat("\n").concat("No. Analyst Questions: ").concat(p.amount_analyst_question.toString()
    ).concat("\n").concat("No. Developer Questions: ").concat(p.amount_developer_question.toString()
    ).concat("\n").concat("No. Tester Questions: ").concat(p.amount_tester_question.toString());

    alert(info);
  }

}
