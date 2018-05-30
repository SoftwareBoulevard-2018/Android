//import { EditAccountPage } from '../edit-account/edit-account';
//import { Company } from '../../models/company';
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
import { Email } from '../../models/email';
import { ToastController } from 'ionic-angular';

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
  //companies: Company[];
  hService: HttpService;
  serv: GeneralServiceService;
  toastCtrl: ToastController;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: GeneralServiceService,
    public httpService: HttpService,
    public toastController: ToastController
  ){
    this.hService = httpService;
    this.serv = this.service;
    this.toastCtrl = toastController;
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

  viewUser(user) {
    this.navCtrl.push(ViewAccountPage,{
      u: user
    });
  }

  hireUser(user: User) 
  {
    var sender: string;
    this.serv.getCurrentUser().then((u) => {
      console.log(u);
      sender = u.id;
      var reciver = user.id;
      var email = new Email(sender, "Recruitment" , [reciver] , "You are invited to our team, join us =D");
      console.log(email);
      this.httpService.send(email).subscribe(
        () => {
          let toast = this.toastCtrl.create({
            message: 'Email sent',
            duration: 3000
          });
          toast.present();

        },
        () => {

          let toast = this.toastCtrl.create({
            message: 'Something went wrong',
            duration: 3000
          });
          toast.present();
        }
      );
      alert('Email sent to ' + user.name + '!');
    });
  }
}
