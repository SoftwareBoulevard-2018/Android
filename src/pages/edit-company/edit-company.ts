import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { Company } from '../../models/company';

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
    public navParams: NavParams
  ) {
    this.company = this.navParams.data.c;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //TODO send data to server
      this.navCtrl.pop();
    }
  }
}
