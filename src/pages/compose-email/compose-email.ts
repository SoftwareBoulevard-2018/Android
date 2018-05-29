//Created by group 9 - module 5
//The necessary components are imported.
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpService } from '../../app/http.service';
import { GeneralServiceService } from '../../app/general-service.service';
import { Email } from '../../models/email';




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
  receivers: String[];
  subject: string;
  content: string;


  receiversSelectedByUser: string[];




  private sender; //This is the object id of the user that will send the email.



  @ViewChild('myInput') myInput: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: GeneralServiceService, public HttpService: HttpService,
    public toastCtrl: ToastController
  ) {

    //Get all users.

    this.HttpService.getAllUsers().subscribe((data) => {
      var dataJson = JSON.parse(JSON.stringify(data));
      this.receivers = dataJson.data;
    });


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


  /*
  This method is used to send an email. (ACCORDING TO USES CASES).
  */
  send() {

    let receiversObjectID: [string] = [""];


    for (let index = 0; index < this.receiversSelectedByUser.length; index++) {
      receiversObjectID[index] = this.receiversSelectedByUser[index]['id'];
    }

    this.service.getCurrentUser().then((user) => {

      this.sender = user.id;

      var emailToSend = new Email(this.sender, this.subject, receiversObjectID, this.content);


      this.HttpService.send(emailToSend).subscribe(
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
      )

    });




  }

}
