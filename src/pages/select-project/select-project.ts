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
    alert(p.project_name);
  }

}
