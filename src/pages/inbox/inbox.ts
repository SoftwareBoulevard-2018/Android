//Created by group 9 - module 5
//The necessary components are imported.
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

  searchQuery: String; //This variable is the text entered by the user to perform the search in the inbox
  private emailArray = []; //This is the arrangement that the user has in the outbox
  private defaultList = []; //This arrangement serves to update the entire list of emails
  private username; //It is the user to whom the inbox will be shown


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public serviceEmail: servicesEmail, public userdata: UserData) {

    /*
    The username is obtained, in this component, from the user that was connected to the system.
    Then a method is invoked to obtain the emails that this user has received.
    */
    this.userdata.getUsername().then(user => {
      this.username = user;
      this.listEmailsReceivedForUser(this.serviceEmail.getEmails(), this.username);

    });

  }

  /*
  This method is in charge of updating the array of the inbox email that the user has.
  It receives an array of emails and the user who wants to see their inbox.
  In this case we have an array of emails and every email has an array of receivers, we need to check if our 
  user logged in the app is on the array of receivers. In the internal cycle in order to add that user we
  check if our user equals to at least one receiver.
  */
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
    let IDEmailSolution = [];

    let EmailSolution = [];

    /*
    In this cycle (for), all the emails on the inbox are scanned, and the id of the email that it has 
    in his subject or sender is added, which is written in the search.
    */
    for (var i = 0; i < this.emailArray.length; i++) {
      var subjectElement = this.emailArray[i].subject;
      var senderElement = this.emailArray[i].sender;

      if (subjectElement.includes(this.searchQuery) || senderElement.includes(this.searchQuery)) {
        IDEmailSolution.push(this.emailArray[i].id);
      }
    }

    /*
    The external cycle (var z) runs through all the emails. 
    The internal cycle (var j) goes through all the solutions of email identifiers and it is checked 
    that the email id solution matches the email id of all the emails that travel through the external 
    cycle. The purpose is to find the id of the emails that meet the search.
    */ 
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

  /* 
  This method is responsible for displaying the entire entry mailbox. It is used after 
  performing a search.
  */
  viewFullInbox() {
    this.emailArray = this.defaultList;
  }

  /*
  This method allows you to see the menu by clicking on the 3-point icon. 
  From there you can access the inbox, outbox and you can go to create a new email.
  */
  viewEmailMenu(myEvent) {
    let popover = this.popoverCtrl.create(MenuemailpopoverPage, {}, { cssClass: 'custom-popover' });
    popover.present({
      ev: myEvent
    });
  }

  /*
  This method is responsible for routing the page where the selected email is read.
  */
  readEmail(emailToRead) {
    this.navCtrl.push(ReademailPage, {
      sender: emailToRead.sender,
      subject: emailToRead.subject,
      content: emailToRead.content,
    });
  }
}