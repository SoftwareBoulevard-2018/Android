import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../projectlist/projectlist';
import { BiddingProject } from '../../../models/biddingProject';
import {HttpService} from '../../../app/http.service';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-biddingeditor',
  templateUrl: 'biddingeditor.html',
})
export class BiddingeditorPage {
  
  submitted = false;
  biddingProject = new BiddingProject();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService: HttpService
  ) {}

  goToProjeclist(form: NgForm){
	
      this.submitted = true;

      if(form.valid){
        return this.httpService.createBiddingProject(this.biddingProject).subscribe(() => {
          this.navCtrl.popTo(ProjectlistPage);
          
        });
      }
      
      
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiddingeditorPage');
  }

}
