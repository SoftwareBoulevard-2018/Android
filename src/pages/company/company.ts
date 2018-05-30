import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/http.service';

import { Company } from '../../models/company';

/**
 * shows information and members of
 * a company received in the param "c"
 */
@Component({
  selector: 'company',
  templateUrl: 'company.html'
})
export class ViewCompanyPage {

  company: Company;
  project_manager = "none";
  members:any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) {

    this.company = navParams.get("c");

    //get all members of the company including the project manager
    httpService.getUsersByCompany(this.company.id).subscribe((users) => {
      users.forEach((user) => {
        if(user.role === 'Project Manager'){
          this.project_manager = user.name;
        }
        this.members.push(user);
      })
    });

  }

}
