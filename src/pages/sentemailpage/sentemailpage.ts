//Created by group 9 - module 5
//The necessary components are imported.
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MenuemailpopoverPage } from '../../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../../pages/reademail/reademail';
import { servicesEmail } from '../../providers/servicesEmail';
import { GeneralServiceService } from '../../app/general-service.service';

/**
 * Generated class for the SentemailpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sentemailpage',
  templateUrl: 'sentemailpage.html',

})
export class SentemailpagePage {

  searchQuery: String; //This variable is the text entered by the user to perform the search in the outbox
  private emailArray =  []; //This is the arrangement that the user has in the outbox
  private defaultList  =  []; //This arrangement serves to update the entire list of emails
  private username; //It is the user to whom the outbox will be shown
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl:PopoverController, public serviceEmail: servicesEmail, public service: GeneralServiceService ) {

    /*
    The username is obtained, in this component, from the user that was connected to the system.
    Then a method is invoked to obtain the emails that this user has sent.
    */

   this.service.getCurrentUser().then((user) => {
      this.username = user.username;
      this.listEmailsSentForUser(this.serviceEmail.getEmails(), this.username);
    })
      
  }

  
   /*
  This method is in charge of updating the array of the outbox email that the user has.
  It receives an array of emails and the user who wants to see their outbox.
  We need to check for every email that the name of the user equals to the sender of the email
  in order to update the emailArray.
  */
  listEmailsSentForUser(email: any[], user: string) {

    var indexemailArray = 0;
    for (let i = 0; i < email.length; i++) {

        if (user.localeCompare(email[i].sender) == 0) {
          this.emailArray[indexemailArray] = email[i];
          indexemailArray++;
        }
  
    }

    this.defaultList = this.emailArray;
  }

  searchEmail() {
    let IDEmailSolution = [];
    let EmailSolution = [];

    /*
    In this cycle (for), all the emails on the outbox are scanned, and the id of the email that it has 
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
  This method is responsible for displaying the entire entry outbox. It is used after 
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
