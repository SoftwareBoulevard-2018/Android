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

  To:String;
  Subject:String;
  Content:String;

  @ViewChild('myInput') myInput: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }
  
  //Falta por programar la lista de Posibles receivers.

  
  /*goBack(){
   
    
    console.log("Para " + this.To);
    console.log("Subject " + this.Subject);
    console.log("Contenido" + this.Content);


     this.navCtrl.push(MainPage);
  }*/


  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  } 

}
