//Created by group 9 - module 5
//The necessary components are imported.
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { MenuemailpopoverPage } from '../../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../../pages/reademail/reademail';

import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';

import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';

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
  private idUser; //This id is used to do HTTP requests in order to read emails for that user.




  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,
    public service: GeneralServiceService, public HttpService: HttpService) {

    //Here we query the current user that is logged and then we do a request to see what emails he has received.
    this.service.getCurrentUser().then((user) => {
      this.idUser = user.id;
      this.HttpService.read(this.idUser).subscribe((data) => {
        if (JSON.parse(JSON.stringify(data)).data.length > this.defaultList.length) {
          this.listEmailsReceivedForUser(data);

        }
      })
    });



    //Every 5 seconds the emails are updated, so we need to do the request.

    this.service.getCurrentUser().then((user) => {
      this.idUser = user.id;


      Observable.interval(5000).subscribe(() => {
        this.HttpService.read(this.idUser).subscribe((data) => {



            this.listEmailsReceivedForUser(data);

        })
      })
    });

  }

  /*
  This method is in charge of updating the array of the inbox email that the user has.
  It receives the data retrieved from the http request that gets the received emails.
  Also we update two arrays, we update emailArray in order to see the inbox and defaultList has all the emails received of
  that user, in case of a search we can go back to all emails with defaulList.
  */
  listEmailsReceivedForUser(data) {

    const dataJson = JSON.parse(JSON.stringify(data));
    this.emailArray = dataJson.data;
    this.defaultList = this.emailArray;


    this.updateDate();
    this.updateSender();
    this.updateState();


  }
  /* This method updates in the view, if the user has read the email.
  Possible States = READ , UNREAD. */
  updateState() {

    for (let i = 0; i < this.emailArray.length; i++) {
      if (this.emailArray[i].acknowledgment.indexOf(this.idUser) >= 0) {
        this.emailArray[i].status = "READ";

      }
      else {
        this.emailArray[i].status = "UNREAD";
      }

    }

  }

  /* This method updates the date of an email in a format easy to read for the user*/
  updateDate() {

    var date;

    for (let i = 0; i < this.emailArray.length; i++) {
      date = this.emailArray[i].createdAt;
      this.emailArray[i].date = moment(date).format('D MMM YYYY, h:mm:ss A');

    }

  }

  /*In this method we update the sender for each email because the response object has an objectID and not username. */
  updateSender() {


    this.HttpService.getAllUsers().subscribe((data) => {

      var sender;
      var dataJson = JSON.parse(JSON.stringify(data));
      var userData = dataJson.data;

      for (let i = 0; i < this.emailArray.length; i++) {

        sender = this.emailArray[i].sender;
        for (let j = 0; j < userData.length; j++) {

          if (sender.localeCompare(userData[j].id) == 0) {
                           //Update sender name

            this.emailArray[i].sname = userData[j].username;
            break;
          }
        }

      }
    }
    )
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
  When you read an email, the state is updated because the user has read the email.
  So we do a request to the server to update the acknoledgment of the email.
  */
  readEmail(emailToRead) {

    var emails = [];
    this.HttpService.read(this.idUser).subscribe((data) => {
      const dataJson = JSON.parse(JSON.stringify(data));
      emails = dataJson.data;

      var indiceBusqueda = -1;

      for (let index = 0; index < emails.length; index++) {

        if (emails[index].id == emailToRead.id) {
          indiceBusqueda = index;
          break;
        }

      }

      if (emails[indiceBusqueda].acknowledgment == undefined) {
        emails[indiceBusqueda].acknowledgment = [];
        emails[indiceBusqueda].acknowledgment[0] = this.idUser;

        this.HttpService.updateState(emails[indiceBusqueda].id, emails[indiceBusqueda]).subscribe();
      }
      else {
        var found = undefined;

        for (let i = 0; i < emails[indiceBusqueda].acknowledgment.length; i++) {
          if (emails[indiceBusqueda].acknowledgment[i] == this.idUser) {
            found = true;
          }
        }
        if (found == undefined) {
          emails[indiceBusqueda].acknowledgment.push(this.idUser);
          this.HttpService.updateState(emails[indiceBusqueda].id, emails[indiceBusqueda]).subscribe();
        }

      }

      this.navCtrl.push(ReademailPage, {
        sender: emailToRead.sname,
        subject: emailToRead.subject,
        content: emailToRead.content,
      });


    });



  }
}