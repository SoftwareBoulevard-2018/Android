import { BiddingProject } from './../../models/biddingProject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Company } from './../../models/company';
import { User } from './../../models/user';
import { GeneralServiceService } from './../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { Estimation } from './../../models/estimation';
import { ToastController } from 'ionic-angular';
import { Record } from './../../models/record';
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
  p: BiddingProject = new BiddingProject("null","null",0,0,0,0,0,0,0,0,0,0);
  lastTimeEst: number = 0;
  lastCostEst: number = 0;
  hService: HttpService;
  timeTry: number;
  costTry: number;
  recordsByCompany: Record[] = [];
  lastRecord: Record;
  toastCtrl: ToastController;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: GeneralServiceService,
              public httpService: HttpService,
              public toastController: ToastController
            )
  {
    this.toastCtrl = toastController;
    this.hService = httpService;
    service.getCurrentUser().then((user) => {
      this.user = user;
        if (!(user.companyId == null))
        {
          httpService.getCompanyById(user.companyId).subscribe((comp) => {
            this.comp = comp;
            httpService.getRecordsByCompany(this.comp.id).subscribe((data) => {
              const data2 = JSON.parse(JSON.stringify(data));
              console.log(data2);
              this.recordsByCompany = data2;
              this.lastRecord = data2[data2.length - 1];
              console.log(this.lastRecord.project.substring(1, 
                this.lastRecord.project.length));
              httpService.getBiddingProjectById(this.lastRecord.project.substring(1, 
                this.lastRecord.project.length)).subscribe((p) => {
                this.p = p;
                console.log(this.p);
              });
            });
          });
        }
      });
    this.ser = service;
    //this.comp.companyResource = 10;
    //this.p = this.ser.bidProjects[this.comp.active_project]; //property not in company
  }
  registerRecords(data)
  {
    console.log(data);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EstimateCostTimePage');
  }

  estimateCostTime()
  { 
    if(!(this.comp.companyResource > 0))
    {
      alert('Not enought K');
      return;
    }
    else{
      var c = this.comp;
      c.companyResource = c.companyResource -1;
      this.hService.updateCompany(c,this.comp.id).subscribe(
        () => {
          let toast = this.toastCtrl.create({
            message: 'Lost 1 resources!',
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
      );
      //this.comp.companyResource = parseInt(this.comp.companyResource.toString()) - 1;
    }

    var ce =  this.costTry;
    var te =  this.timeTry;
    console.log('ce ' + ce + ' te ' + te);
    this.costEst.push(ce);
    this.timeEst.push(te);
    this.lastCostEst = ce;
    this.lastTimeEst = te;
    var cost = this.p.cost;
    var time = this.p.time;
    console.log('Testing for time '+this.p.time + ' ' + time);
    console.log('Testing for cost '+this.p.cost + ' ' + cost);

    var estimation = new Estimation(this.user.name, this.p.name, ce, te); 
    console.log(time+ ' ' + cost);
    console.log(cost + cost*0.1);
    if((ce <= cost + cost*0.1 && ce >= cost - cost*0.1) && (te <= time + time*0.1 && te >= time - time*0.1))
    {
      console.log("Success!!");
      this.hService.createEstimation(estimation).subscribe(
        () => {
          let toast = this.toastCtrl.create({
            message: 'Estimation suscessfull!',
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
        });
    }
    else{
      console.log(estimation);
    }
    //console.log('The user that got here in estimate is '.concat(this.user.name));
    //console.log('the company id is '.concat(this.user.companyId));

  }
}
