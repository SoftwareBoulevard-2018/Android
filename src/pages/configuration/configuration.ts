import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ViewController,ToastController } from 'ionic-angular';

import { HttpService } from '../../app/http.service';

/**
 * shows the login form and validates the data, shows a toast if invalid.
 * also shows the curren apiURL and a button to change it
 */
@Component({
  selector: 'configuration',
  templateUrl: 'configuration.html'
})
export class ConfigurationPage {
  apiOld = HttpService.apiURL;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController) { 
    }

  template(url){
    this.apiOld = url;
  }
  changeAPI(form: NgForm) {
    HttpService.apiURL = form.value['api'];
    this.dismiss();
    let toast = this.toastCtrl.create({
      message: "the api was changed succesfully",
      duration: 3000
    });
    toast.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
