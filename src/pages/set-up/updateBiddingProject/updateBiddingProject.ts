import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BiddingProject } from '../../../models/biddingProject';
import { HttpService } from '../../../app/http.service';

import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'updateBiddingProject',
  templateUrl: 'updateBiddingProject.html',
})
export class UpdateBiddingProjectPage {
  bidding:BiddingProject;
  submitted = false;
  biddingProject = new BiddingProject();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) {this.biddingProject = this.navParams.data.c; }

  goToProjectlist(form: NgForm,idbidding:string) {
    this.submitted = true;
    console.log(idbidding);
    if (form.valid) {
      return this.httpService.updateBiddingProject(this.biddingProject,idbidding).subscribe(() => {
        this.navCtrl.pop();

      });

    }

  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad InstanteditorPage');
    }

  }
