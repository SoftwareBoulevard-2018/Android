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
  lacking_project_manager = true;
  project_managers;
  project_manager;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) {
    this.company = this.navParams.data.c;
    this.getCurrentProjectManager(this.company.id);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      return this.httpService.updateCompany(this.company, this.company.id).subscribe(() => {
        if(this.project_manager!==undefined&&this.project_manager!==null&&this.project_manager!==''){
          return this.httpService.updateUser({ companyId: this.company.id }, this.project_manager).subscribe(() => {
            this.navCtrl.pop();          
          });
        }else{
          this.navCtrl.pop();
        }
        
      });
      
    }
  }

  getCurrentProjectManager(companyId) {
    return this.httpService.getUserByRoleCompany('Project Manager', companyId).subscribe( data => {
      console.log(data[0])
        if (data[0] === undefined) {
          this.lacking_project_manager = true;
          this.getUserByRoleCompany('Project Manager', null);
        } else {
          this.lacking_project_manager = false;
        }
      }
    );
  }

  getUserByRoleCompany(role, companyId) {
    return this.httpService.getUserByRoleCompany(role, companyId).subscribe( data => {
        console.log(data);
        if (Array.isArray(data)) {
          this.project_managers = data;
        } else {
          this.project_managers = [data];
        }
        console.log(this.project_managers);
      }, () => {
        this.project_managers = [];
      }
    );
  }
}
