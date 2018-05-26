import { BiddingProject } from './../../models/biddingProject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Company } from './../../models/company';
import { User } from './../../models/user';
import { GeneralServiceService } from './../../app/general-service.service';

/**
 * Generated class for the EstimateCostTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estimate-cost-time',
  templateUrl: 'estimate-cost-time.html',
})
export class EstimateCostTimePage {
  comp: Company;
  user: User;
  ser: GeneralServiceService;
  costEst: number[] = [];
  timeEst: number[] = [];
  p: BiddingProject;
  lastTimeEst: number = 0;
  lastCostEst: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    service: GeneralServiceService) {

    this.user = new User("Pedro el test user", "Testy", "1", "Project manager","UNAL",2,0);
    //this.comp = service.companies.find(c => c.name === this.user.company_name); //line comented for compilation
    //this.comp.resources = 10;
    this.ser = service;
    this.p = this.ser.bidProjects[this.comp.active_project];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimateCostTimePage');
  }

  estimateCostTime()
  { 
    if(!(this.comp.resources > 0))
    {
      alert("Not enough resources!! get more!");
      return;
    }
    else{
      this.comp.resources = parseInt(this.comp.resources.toString()) - 1;
    }

    var ce =  Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
    var te =  Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    this.costEst.push(ce);
    this.timeEst.push(te);
    this.lastCostEst = ce;
    this.lastTimeEst = te;

    if(ce >= this.p.cost && te >= this.p.time)
    {
      alert("Success!!!");
    }
    else{
      alert("Fail!!! try again =)");
    }
  }

  try()
  {
    alert("hi");
  }

}
