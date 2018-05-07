import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { MenuemailpopoverPage } from '../../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../../pages/reademail/reademail';
import { servicesEmail } from '../../providers/servicesEmail';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  searchQuery: String;
  test: String;

  //Esto deberia obtenerse de un servicio.
  private emailArray;
  private defaultList;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,  public serviceEmail: servicesEmail ) {

    //ID, Subject, Content, Date, Sender, Receiver.
    //Esto se deberia obtener de un servicio.

    this.emailArray = this.serviceEmail.getEmailsReceived();

    this.defaultList = this.emailArray;
  }

  searchEmail() {
    //SearchQuery
    //Subject o Sender.
    let IDEmailSolution = [];

    let EmailSolution = [];

    for (var i = 0; i < this.emailArray.length; i++) {
      var subjectElement = this.emailArray[i].subject;
      var senderElement = this.emailArray[i].sender;

      if (subjectElement.includes(this.searchQuery) || senderElement.includes(this.searchQuery)) {
        IDEmailSolution.push(this.emailArray[i].id);
      }
    }

    var index = 0;

    for (var z = 0; z < this.emailArray.length; z++) {
      var idEmail = this.emailArray[z].id;
      var encontrado = false;

      for (var j = 0; j < IDEmailSolution.length; j++) {
        if (idEmail == IDEmailSolution[j]) {
          encontrado = true;
          break;
        }
      }

      if (encontrado === true) {
        EmailSolution[index] = this.emailArray[z];
        index++;
      }
    }
    this.emailArray = EmailSolution;

    this.searchQuery = "";

  }

  viewFullInbox() {
    this.emailArray = this.defaultList;
  }

  viewEmailMenu(myEvent){
    let popover = this.popoverCtrl.create(MenuemailpopoverPage, {},{ cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  readEmail(emailToRead) {
    this.navCtrl.push(ReademailPage, {
    sender: emailToRead.sender,
    subject: emailToRead.subject,
    content: emailToRead.content,
  });
  }
}