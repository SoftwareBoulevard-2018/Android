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
    /*var name="1";
    var rewarded_k = 1;
    var amount_tester_question = 1;
    var amount_analyst_question = 1;
    var amount_developer_question = 1;
    var time = 1;
    var cost = 1;
    var required_k = 1; 
    var required_analyst_level = 1;
    var required_developer_level = 1; 
    var required_tester_level = 1;
    var rewarded_k = 1;
    var biddingProject = new BiddingProject(name, rewarded_k, amount_tester_question, amount_analyst_question, amount_developer_question, time, cost, required_k, required_analyst_level, required_developer_level, required_tester_level);
     this.httpService.createBiddingProject(biddingProject).subscribe((biddingProject) => {
      console.log(biddingProject); 
      this.navCtrl.push(ProjectlistPage);
    });;*/
  
  /*this.httpService.createBiddingProject(biddingProject);
	console.log(biddingProject); 
      this.navCtrl.push(ProjectlistPage);*/
	
      this.submitted = true;

      if(form.valid){
        return this.httpService.createBiddingProject(this.biddingProject).subscribe(() => {
          this.navCtrl.push(ProjectlistPage);
          
        });
      }
      
      
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiddingeditorPage');
  }

}
