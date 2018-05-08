//Created by group 9 - module 5
//The necessary components are imported.
import { Component, ViewChild, ElementRef } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReademailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-reademail',
  templateUrl: 'reademail.html',
})
export class ReademailPage {

/*
Declare the variables that will show the data of the selected email to read.
*/
  From:String;
  Subject:String;
  Content:String;
  
  @ViewChild('myInput') myInput: ElementRef;
  /*
  The variables that will show the email information based on the parameters delivered 
  by the inbox or sent component are updated, depending on the case.
  */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.From = navParams.get('sender');
    this.Subject = navParams.get('subject');
    this.Content = navParams.get('content');
  }


}
