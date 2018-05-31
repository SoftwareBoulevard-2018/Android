import { InstantProjectb } from './../../models/instantProjectb';
import { BiddingProjectb } from './../../models/biddingProjectb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { Record } from './../../models/record';
import { User } from './../../models//user';
import { ToastController } from 'ionic-angular';
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
  instP: InstantProjectb[] = [];
  bidP: BiddingProjectb[] = [];
  hService: HttpService;
  serv: GeneralServiceService;
  user: User;
  toastCtrl: ToastController;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService,
    public httpService: HttpService,
    public toastController: ToastController) {
      this.hService = httpService;
      this.serv = service;
      this.toastCtrl = toastController;
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
      var nip = new BiddingProjectb(JSON.stringify(project).substring(7,32),
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
        var nip = new InstantProjectb(JSON.stringify(project).substring(7,32),
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


  selectProject(p: BiddingProjectb)
  { 
    this.serv.getCurrentUser().then((u) => {
      this.user = u;
      var r: Record = new Record(null, new Date("12/15/1990"),new Date("12/15/1990"),this.user.companyId,p.id);
      console.log(r);

      this.hService.createRecord(r).subscribe(
        () => {
          let toast = this.toastCtrl.create({
            message: 'Record Created',
            duration: 3000
          });
          toast.present();

        },
        () => {

          let toast = this.toastCtrl.create({
            message: 'Something went wrong',
            duration: 3000
          });
          toast.present();
        }
      );;

      alert("Selected");
    });   
  }


}
