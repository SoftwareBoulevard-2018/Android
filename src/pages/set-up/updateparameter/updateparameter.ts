import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../../app/http.service';
import { GeneralServiceService } from '../../../app/general-service.service';

import { NgForm } from '@angular/forms';
import { User } from '../../../models/user';
@Component({
  selector: 'updateparameter',
  templateUrl: 'updateparameter.html'
})
export class UpdateparameterPage {

  user=new User();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public service: GeneralServiceService){
    
  }
  ionViewWillEnter() {
    this.service.getCurrentUser().then((user) => {
       this.user = user
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      return this.httpService.updateUser(this.user, this.user.id).subscribe(() => {
        this.navCtrl.pop();
      });
      
    }
  }
}
