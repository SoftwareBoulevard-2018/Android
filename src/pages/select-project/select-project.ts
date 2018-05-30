import { InstantProject } from './../../models/instantProject';
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
  instP: InstantProject[] = [];
  bidP: BiddingProject[] = [];
  hService: HttpService;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService,
    public httpService: HttpService) {
      this.hService = httpService;
     // this.instP = service.InstProjects;
     // this.bidP = service.bidProjects;
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SelectProjectPage');
    this.getAllBidProjects();
    this.getAllInstProjects();
  }

  getAllBidProjects() {
    return this.httpService.getAllBiddingProjects().subscribe(data => {
        this.fillBidProjects(data['data']);
        //console.log(data);      
      }
    );
  }
  getAllInstProjects() {
      this.httpService.getAllInstantProjects().subscribe(data => {
        this.fillInstProjects(data['data']);
        //console.log(data);      
      }
    );
  }

  fillBidProjects(projects) {
    projects.forEach(project => { 
      var nip = new BiddingProject(JSON.stringify(project).substring(7,32),
      project.name, project.numberOfDevelopingQuestionsPerAnalyst,
      project.numberOfDevelopingQuestionsPerTester, 
      project.numberOfDevelopingQuestionsPerDeveloper,
      project.rewarded_K, project.time, project.cost,project.required_K,
      project.required_analyst_level, project.required_developer_level,
      project.required_tester_level);
      this.bidP.push(nip);
    });
    console.log(this.bidP);
  }

  fillInstProjects(projects) {
    projects.forEach(project => { 
        var nip = new InstantProject(JSON.stringify(project).substring(7,32),
        project.name, project.numberOfDevelopingQuestionsPerAnalyst,
        project.numberOfDevelopingQuestionsPerTester, 
        project.numberOfDevelopingQuestionsPerDeveloper,
        project.rewarded_K);
        this.instP.push(nip);
    });
    console.log(this.instP);
  }


  viewProjectInfo(p: any)
  { 
      var info: String;
      if(p.required_K == null || p.required_K == undefined)
      {
        info = "Instant Project Information".concat("\n"
        ).concat("Id: ").concat(p.id.toString()).concat("\n").concat("Name: "
        ).concat(p.name).concat("\n").concat("Reward k: ").concat(p.rewarded_K.toString()
        ).concat("\n").concat("No. Analyst Questions: ").concat(p.numberOfDevelopingQuestionsPerAnalyst.toString()
        ).concat("\n").concat("No. Developer Questions: ").concat(p.numberOfDevelopingQuestionsPerDeveloper.toString()
        ).concat("\n").concat("No. Tester Questions: ").concat(p.numberOfDevelopingQuestionsPerTester.toString());
      }
      else
      {
        info = "Bidding Project Information".concat("\n"
        ).concat("Id: ").concat(p.id.toString()).concat("\n").concat("Name: "
        ).concat(p.name).concat("\n").concat("Reward k: ").concat(p.rewarded_K.toString()
        ).concat("\n").concat("No. Analyst Questions: ").concat(p.numberOfDevelopingQuestionsPerAnalyst.toString()
        ).concat("\n").concat("No. Developer Questions: ").concat(p.numberOfDevelopingQuestionsPerDeveloper.toString()
        ).concat("\n").concat("No. Tester Questions: ").concat(p.numberOfDevelopingQuestionsPerTester.toString()
        ).concat("\n").concat("Time: ").concat(p.time.toString()
        ).concat("\n").concat("Cost ").concat(p.cost.toString()
        ).concat("\n").concat("Required K: ").concat(p.required_K.toString()
        ).concat("\n").concat("Required Analyst Level: ").concat(p.required_analyst_level.toString()
        ).concat("\n").concat("Required Developer Level: ").concat(p.required_developer_level.toString()
        ).concat("\n").concat("Required Tester Level: ").concat(p.required_tester_level.toString())
        ;
      }

      alert(info); 
  }


  selectProject(p: BiddingProject)
  { 
    //JSON.stringify(p).substring(7,32)
    alert(p.numberOfDevelopingQuestionsPerAnalyst);
  }


}
