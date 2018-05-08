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


  constructor(public navCtrl: NavController, public navParams: NavParams,
    service: GeneralServiceService) {

    this.user = new User("Pedro el test user", "Testy", "1", "Project manager","UNAL",2,0);
    this.comp = service.companies.find(c => c.name === this.user.company_name);
    this.ser = service;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimateCostTimePage');
  }

  estimateCostTime()
  {
    var p: BiddingProject = this.ser.bidProjects[this.comp.active_project];
    var ce =  Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
    var te =  Math.floor(Math.random() * (10000 - 0 + 1)) + 0;

    if(ce >= p.cost && te >= p.time)
    {
      var rg: Number = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
      this.comp.resources = parseInt(this.comp.resources.toString()) + parseInt(rg.toString());
    }

    
  }

  try()
  {
    alert("hi");
  }

}
