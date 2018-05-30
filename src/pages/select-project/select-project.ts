//import { InstantProject } from './../../models/instantProject';
import { BiddingProject } from './../../models/biddingProject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';

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
  projects: BiddingProject[] = [];
  hService: HttpService;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService,
    public httpService: HttpService) {
      this.hService = httpService;
     // this.instP = service.InstProjects;
     // this.bidP = service.bidProjects;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectProjectPage');
    this.getAllProjects()
  }

  getAllProjects() {
    return this.httpService.getAllBiddingProjects().subscribe(data => 
      {
        this.fillProjects(data['data']);
        console.log(data);      
      }
  );
    
  }

  fillProjects(projects) {
    projects.forEach(project => { 
        this.projects.push(project);
    });
    console.log("Reached filled Projects");
  }


  viewProjectInfo(p: any)
  {
      var info: String;
      if(p.required_k == null || p.required_k == undefined)
      {
        info = "Instant Project Information".concat("\n"
        ).concat("Id: ").concat(p.project_id.toString()).concat("\n").concat("Name: "
        ).concat(p.project_name).concat("\n").concat("Reward k: ").concat(p.rewarded_k.toString()
        ).concat("\n").concat("No. Analyst Questions: ").concat(p.amount_analyst_question.toString()
        ).concat("\n").concat("No. Developer Questions: ").concat(p.amount_developer_question.toString()
        ).concat("\n").concat("No. Tester Questions: ").concat(p.amount_tester_question.toString());
      }
      else
      {
        info = "Bidding Project Information".concat("\n"
        ).concat("Id: ").concat(p.project_id.toString()).concat("\n").concat("Name: "
        ).concat(p.project_name).concat("\n").concat("Reward k: ").concat(p.rewarded_k.toString()
        ).concat("\n").concat("No. Analyst Questions: ").concat(p.amount_analyst_question.toString()
        ).concat("\n").concat("No. Developer Questions: ").concat(p.amount_developer_question.toString()
        ).concat("\n").concat("No. Tester Questions: ").concat(p.amount_tester_question.toString()
        ).concat("\n").concat("Time: ").concat(p.time.toString()
        ).concat("\n").concat("Cost ").concat(p.cost.toString()
        ).concat("\n").concat("Required K: ").concat(p.required_k.toString()
        ).concat("\n").concat("Required Analyst Level: ").concat(p.required_analyst_level.toString()
        ).concat("\n").concat("Required Developer Level: ").concat(p.required_developer_level.toString()
        ).concat("\n").concat("Required Tester Level: ").concat(p.required_tester_level.toString())
        ;
      }

      alert(info);
  }


  selectProject(p: any)
  {
    alert("Selected project: ".concat(p.project_id.toString()));
  }


}
