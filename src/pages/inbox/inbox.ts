import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { MenuemailpopoverPage } from '../../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../../pages/reademail/reademail';
import { servicesEmail } from '../../providers/servicesEmail';
import { UserData } from '../../providers/user-data';


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
  private emailArray = [];
  private defaultList = [];

  private username;


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public serviceEmail: servicesEmail, public userdata: UserData) {

    this.userdata.getUsername().then(user => {
      this.username = user;
      this.listEmailsReceivedForUser(this.serviceEmail.getEmails(), this.username);

    });

  }

  //Esta metodo se encarga de actualizar el array del email de inbox que tiene el usuario.
  listEmailsReceivedForUser(email: any[], user: string) {

    var indexemailArray = 0;
    for (let i = 0; i < email.length; i++) {
      for (let j = 0; j < email[i].receiver.length; j++) {
        if (user.localeCompare(email[i].receiver[j]) == 0) {
          this.emailArray[indexemailArray] = email[i];
          indexemailArray++;
          break;
        }
      }
    }

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

  viewEmailMenu(myEvent) {
    let popover = this.popoverCtrl.create(MenuemailpopoverPage, {}, { cssClass: 'custom-popover' });
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