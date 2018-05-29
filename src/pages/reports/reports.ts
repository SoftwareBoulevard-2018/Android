import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HttpService } from '../../app/http.service';

import {
  NavController, NavParams
} from 'ionic-angular';
/**
 * shows a list with the subset of reports
 * based on the received parameters.
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
        if (user.resourcesSpent !== 0) {
          user.efficiency = ((user.correctProjectQuestions + user.correctTrainingQuestions) / (user.resourcesSpent) * 100).toFixed(2);
        } else {
          user.efficiency = 0;
        }
      });
      data['data'].sort((a,b) => {b.efficiency - a.efficiency});
      this.topEfficentUsers = data['data'].slice(0,5);
      data['data'].sort((a,b) => {b.resourcesSpent - a.resourcesSpent});
      this.topActiveUsers = data['data'].slice(0,5);
    })
  }

  
  
}
