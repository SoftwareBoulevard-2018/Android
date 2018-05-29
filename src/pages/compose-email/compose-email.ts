//Created by group 9 - module 5
//The necessary components are imported.
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { MainPage } from '../main/main';

/**
 * Generated class for the ComposeEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-compose-email',
  templateUrl: 'compose-email.html',
})
export class ComposeEmailPage {

  /*
  The following variables are used to save information about the email in order 
  to send it to another user.
  */
  receivers:String[];
  subject:String;
  content:String;

  @ViewChild('myInput') myInput: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*
  This method is used to resize the space that the user has for writting the content of the email.
  */
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  } 

  send(){

  }

}
