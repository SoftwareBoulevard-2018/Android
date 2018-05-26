import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Company } from '../../models/company';

/**
 * shows a company received in the param "c"
 */
@Component({
  selector: 'company',
  templateUrl: 'company.html'
})
export class ViewCompanyPage {
  company: Company;
  project_manager: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.company = navParams.get("c")
    /* TODO
    if(this.company.project_manager){
      this.project_manager = this.company.project_manager.name;
    }else{
      this.project_manager = "pending";
    }*/
  }

}
