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
import { Invitation } from '../../models/invitation';

/**
 * Generated class for the HireUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 
 Backend for the hire user page 
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

  constructor(//Basic things for create the page 
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

  getAllUsers() {//Funtion for bring from the database all users 
    return this.httpService.getAllUsers().subscribe(data => this.addCompanies(data['data']));
  }
  addCompanies(users) {//This functions checks if user has company and add it
    users.forEach(user => {
      this.httpService.getCompanyById(user.companyId).subscribe(() => {
        //user.company = company;
        //user.companyName = company.name;
        //this.users.push(user);
        //Fills the array
      }, error => {
        console.log(error);
        user.company = undefined;
        user.companyName = undefined;
        this.users.push(user);
      })
    });
  }

  //Displays the users info in another page

  viewUser(user) {
    this.navCtrl.push(ViewAccountPage,{
      u: user
    });
  }

  hireUser(user: User) //This function sends the invitation to the user, and an email to notify him
  {
    var sender: string;
    this.serv.getCurrentUser().then((u) => {
      console.log(u);
      sender = u.id;
      var reciver = user.id;
      var email = new Email(sender, "Recruitment" , [reciver] , "You are invited to our team, join us =D");
      console.log(email);

      //Sends the email, and clech for errors
      this.httpService.send(email).subscribe(
        () => {
          let toast = this.toastCtrl.create({
            message: 'Email sent to ' + user.name + '!',
            duration: 3000
            //a messege is print if successfull
          });
          toast.present();

        },
        () => {

          let toast = this.toastCtrl.create({
            message: 'Something went wrong',
            duration: 3000
            //a messege is print if not successfull
          });
          toast.present();
        }
      );
      //Creates the invitation, and checks for request errors
      var invitation: Invitation = new Invitation(null,user.id, u.companyId, 'pending');

      console.log(invitation);
      this.hService.createinvitations(invitation).subscribe(
        () => {
          let toast = this.toastCtrl.create({
            message: 'Invitation sent to ' + user.name + '!',
            duration: 3500
            //a messege is print if successfull
          });
          toast.present();

        },
        () => {

          let toast = this.toastCtrl.create({
            message: 'Something went wrong',
            duration: 3000
            //a messege is print if not successfull
          });
          toast.present();
        }
      );
    });
  }
}
