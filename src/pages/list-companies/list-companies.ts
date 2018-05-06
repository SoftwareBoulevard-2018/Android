import { Component } from '@angular/core';

import { viewCompanyPage } from '../company/company';

import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'list-companies',
  templateUrl: 'list-companies.html'
})
export class ListCompaniesPage {

  constructor(
    public navCtrl: NavController,
  ) {}

  viewCompany() {
    this.navCtrl.push(viewCompanyPage);
  }

}
