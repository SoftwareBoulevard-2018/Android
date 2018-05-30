import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HttpService } from '../../app/http.service';

import {
  NavController, NavParams
} from 'ionic-angular';
/**
 * shows a list with the subset of reports
 * based on the received parameters.
 * 
 * current reports:
 *  Companies by K:            Bar chart
 *  Companies by Resources:    Pie chart
 *  Top 5 users by efficiency: List
 *  Top 5 users by activity:   List
 */
@Component({
  selector: 'reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
  companiesReports = false;
  usersReports = false;

  view = [];
  companyK = []
  companyResource = []
  topEfficentUsers = [];
  topActiveUsers = [];

  colorScheme = {
    domain: ['#00585E', '#009494', '#454445', '#FF5729', '#00B27D', '#29FFBF','#5E2700','#AB4600','#911E0F']
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public httpService: HttpService
  ) {
    //set of reports to show
    if(navParams.get("reportsType") === "companies"){
      this.companiesReports = true;
    }else if(navParams.get("reportsType") === "users"){
      this.usersReports = true;
    }else{
      this.companiesReports = true;
      this.usersReports = true;
    }

    platform.ready().then(() => {
      this.view = [platform.width()-20, 350];
    });

    /**
     * obtention of data for reports
     */
    this.httpService.getAllCompanies().subscribe(data => {
      data['data'].forEach(company => {
        const entryK = {name: company.name,value: company.capacityK};
        this.companyK = [...this.companyK, entryK];
        const entryResource = {name: company.name,value: company.companyResource};
        this.companyResource = [...this.companyResource, entryResource];
      });
    })

    this.httpService.getAllUsers().subscribe(data => {
      data['data'].forEach(user => {
        user.efficiency = 0;
        if (user.resourcesSpent) {
          user.efficiency = ((user.correctProjectQuestions + user.correctTrainingQuestions) / (user.resourcesSpent) * 100).toFixed(2);
        }
        
      });
      let orden = data['data'].sort((a,b) => {return b.efficiency - a.efficiency});
      this.topEfficentUsers = orden.slice(0,5);
      orden = data['data'].sort((a,b) => {return b.resourcesSpent - a.resourcesSpent});
      this.topActiveUsers = orden.slice(0,5);

    })
  }

  
  
}
