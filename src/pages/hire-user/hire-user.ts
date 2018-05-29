import { EditAccountPage } from '../edit-account/edit-account';
import { Company } from '../../models/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
import { CreateAccountPage } from '../create-account/create-account';
import { EditAccountPage } from '../edit-account/edit-account';
*/
import { ViewAccountPage } from '../account/account';

import { GeneralServiceService } from '../../app/general-service.service';
import { User } from '../../models/user';
import { HttpService } from '../../app/http.service';

/**
 * Generated class for the HireUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hire-user',
  templateUrl: 'hire-user.html',
})
export class HireUserPage {
  users: User[];
  companies: Company[];
  hService: HttpService;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService,
    public httpService: HttpService
    
  ){
    this.hService = httpService;
  }
  ionViewDidEnter(){
    this.users = [];
    this.getAllUsers();
  }

  getAllUsers() {
    return this.httpService.getAllUsers().subscribe(data => this.addCompanies(data['data']));
  }
  addCompanies(users) {
    users.forEach(user => {
      this.httpService.getCompanyById(user.companyId).subscribe(company => {
        user.company = company;
        user.companyName = company.name;
        this.users.push(user);
      }, error => {
        console.log(error);
        user.company = undefined;
        user.companyName = undefined;
        this.users.push(user);
      })
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HireUserPage');
  }

  viewUser(user) {
    this.navCtrl.push(ViewAccountPage,{
      u: user
    });
  }

  editUser(user) {
    this.navCtrl.push(EditAccountPage, {
      u: user
    })
  }
  hireUser(user) 
  {
    alert('The user selected is ' + user.name);
  }
}
