import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/http.service';

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
  members:any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) {
    this.company = navParams.get("c");
    httpService.getUsersByCompany(this.company.id).subscribe((users) => {
      users.forEach((user) => {
        if(user.role === 'Project Manager'){
          this.project_manager = user.name;
        }
        this.members.push(user);
      })
    });

    /* TODO
    if(this.company.project_manager){
      this.project_manager = this.company.project_manager.name;
    }else{
      this.project_manager = "pending";
    }*/
  }


}
