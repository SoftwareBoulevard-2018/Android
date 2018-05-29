import { BiddingProject } from './../../models/biddingProject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Company } from './../../models/company';
import { User } from './../../models/user';
import { GeneralServiceService } from './../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import 'rxjs/add/operator/map';
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
  comp: Company = new Company("00000000000null", "Null Company", "No image",
  0, 0, 0, 0, 0);;
  user: User;
  ser: GeneralServiceService;
  costEst: number[] = [];
  timeEst: number[] = [];
  p: BiddingProject;
  lastTimeEst: number = 0;
  lastCostEst: number = 0;
  hService: HttpService;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              service: GeneralServiceService,
              public httpService: HttpService)
  {
    this.hService = httpService;
    service.getCurrentUser().then((user) => {
      this.user = user;
        if (!(user.companyId == null))
        {
          httpService.getCompanyById(user.companyId).subscribe((comp) => {
            this.comp = comp;
          });
        }
      });
    this.ser = service;
    //this.p = this.ser.bidProjects[this.comp.active_project]; //property not in company
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimateCostTimePage');
  }

  estimateCostTime()
  { 
    console.log('The user that got here in estimate is '.concat(this.user.name));
    console.log('the company id is '.concat(this.user.companyId));
  }
}
