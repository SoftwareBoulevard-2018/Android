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


  From:String;
  Subject:String;
  Content:String;
  
  @ViewChild('myInput') myInput: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.From = navParams.get('sender');
    this.Subject = navParams.get('subject');
    this.Content = navParams.get('content');
  }


}
