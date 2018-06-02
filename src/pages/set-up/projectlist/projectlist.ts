import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewprojectPage } from '../newproject/newproject';
import { MainPage } from '../../main/main';
import { SetUpPage } from '../set-up';
import { HttpService } from '../../../app/http.service';
import { UpdateInstantProjectPage } from '../updateInstantProject/updateInstantProject';
import { UpdateBiddingProjectPage } from '../updateBiddingProject/updateBiddingProject';

 
@IonicPage()
@Component({
  selector: 'page-projectlist',
  templateUrl: 'projectlist.html',
})
export class ProjectlistPage {

  biddingProject: any;
  instantProject: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpService
  ) {}
 
  ionViewWillEnter(){
    this.httpService.getAllBiddingProjects().subscribe(data => {
      this.biddingProject = data['data']
    })
    this.httpService.getAllInstantProjects().subscribe(data => {
      this.instantProject = data['data']
    })
  }

  updateInstant(instantProject){
    this.navCtrl.push(UpdateInstantProjectPage,{c:instantProject});
  }

  updateBidding(biddingProject){
    this.navCtrl.push(UpdateBiddingProjectPage,{c:biddingProject});
  }

  goToNewproject(){
    this.navCtrl.push(NewprojectPage);
  }

  goToMain(){
    this.navCtrl.push(MainPage);
  }

  goToHome(){
    this.navCtrl.push(SetUpPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectlistPage');
  }

}