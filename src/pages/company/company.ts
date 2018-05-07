import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Company } from '../../models/company';

@Component({
  selector: 'company',
  templateUrl: 'company.html'
})
export class ViewCompanyPage {
  company: Company;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.company = navParams.get("c")
  }

}
