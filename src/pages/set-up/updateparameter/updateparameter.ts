import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../../main/main';
import { User } from '../../../models/user';
import { HttpService } from '../../../app/http.service';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'updateparameter',
  templateUrl: 'updateparameter.html'
})
export class UpdateparameterPage {
  us:User;
  submitted = false;
  user = new User();
  constructor(public navCtrl: NavController,public navParams: NavParams,public httpService: HttpService){
    this.user = this.navParams.data.c;
  }

  goToMain(form: NgForm,id:string){
    this.submitted = true;
    console.log(form);
    if (form.valid) {
      return this.httpService.updateParameter(this.user,id).subscribe(() => {
        this.navCtrl.pop();

      });

    }
    this.navCtrl.push(MainPage);
  }


  ionViewDidLoad(){
    console.log('update parameter charged')
  }
}
