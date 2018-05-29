import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { Company } from '../../models/company';
import {HttpService} from '../../app/http.service';
/**
 * shows and validates a form used to create a new company
 */
@Component({
  selector: 'create-company',
  templateUrl: 'create-company.html'
})
export class CreateCompanyPage {
  company = new Company();
  project_managers;
  project_manager;
  submitted = false;
  //TODO: image uploading (https://www.djamware.com/post/599da16580aca768e4d2b130/how-to-upload-file-on-ionic-3-using-native-file-transfer-plugin)

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService
  ) {}

  ionViewWillEnter(){
    this.getUserByRoleCompany('Project Manager', null);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if(form.valid){
      return this.httpService.createCompany(this.company).subscribe((company) => {
        return this.httpService.updateUser({ companyId: company.id }, this.project_manager).subscribe(() => {
          this.navCtrl.pop();          
        });
        
      });
    }
    
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
