import { Component } from '@angular/core';

import { ViewCompanyPage } from '../company/company';
import { EditCompanyPage } from '../edit-company/edit-company';
import { CreateCompanyPage } from '../create-company/create-company';

import { HttpService } from '../../app/http.service';

import { NavController } from 'ionic-angular';

/**
 * shows a list with all companies.
 * 
 * also shows a FAB to create a new company and each company has
 * a edit button and can be viewed by taping in the name/image.
 */
@Component({
  selector: 'list-companies',
  templateUrl: 'list-companies.html'
})
export class ListCompaniesPage {

  companies: any;

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService
  ) {
    
  }
  ionViewWillEnter(){
    this.httpService.getAllCompanies().subscribe(data => {
      this.companies = data['data']
    })
  }
  viewCompany(company) {
    this.navCtrl.push(ViewCompanyPage,{
      c: company
    });
  }
  createCompany() {
    this.navCtrl.push(CreateCompanyPage);
  }
  editCompany(company) {
    this.navCtrl.push(EditCompanyPage, {
      c: company
    })
  }

}
