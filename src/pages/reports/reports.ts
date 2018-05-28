import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HttpService } from '../../app/http.service';

import {
  NavController
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

  width:number;
  view = [];
  single = []

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public httpService: HttpService
  ) {
    platform.ready().then(() => {
      this.width = platform.width();
      this.view = [this.width-20,350];
    });

    this.httpService.getAllCompanies().subscribe(data => {
      data['data'].forEach(company => {
        const entry = {name: company.name,value: company.capacityK};
        this.single = [...this.single, entry];
        //this.single.push({"name": company.name,"value": company.capacityK})
      });
      console.log(this.single)
    })
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Company';
  showYAxisLabel = false;
  yAxisLabel = 'K';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
}
