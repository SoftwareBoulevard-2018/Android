import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { Company } from '../../models/company';
import {HttpService} from '../../app/http.service';

/**
 * shows and validates a form used to update a company received in param c
 */
@Component({
  selector: 'edit-company',
  templateUrl: 'edit-company.html'
})
export class EditCompanyPage {
  company: Company;
  submitted = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) {
    this.company = this.navParams.data.c;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      return this.httpService.updateCompany(this.company, this.company.id).subscribe(() => {
        this.navCtrl.pop();
      });
      
    }
  }
}
