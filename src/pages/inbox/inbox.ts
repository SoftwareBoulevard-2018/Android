import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { MenuemailpopoverPage } from '../../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../../pages/reademail/reademail';


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
  private emailArray: any[];
  private defaultList: any[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {

    //ID, Subject, Content, Date, Sender, Receiver.
    //Esto se deberia obtener de un servicio.

    this.emailArray = [
      { id: 1, subject: 'Bidding project negotiation', content: 'Hello          , I am Carlos and we need to negotiate a bidding project', date: '01/04/2020', sender: 'cmzapata@company.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 2, subject: 'Instant project negotiation', content: 'Hello         , I am Paul and we need to negotiate a instant project', date: '01/01/2020', sender: 'pauv-22@unal.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 3, subject: 'Analyst for our company', content: 'Hello, we need an analyst for our company called Cidenet, you can talk with us', date: '01/02/2020', sender: 'cddr33@gmail.com', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 4, subject: 'Bidding project negotiation', content: 'Hello          , I am Carlos and we need to negotiate a bidding project', date: '01/04/2020', sender: 'cmzapata@company.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 5, subject: 'Instant project negotiation', content: 'Hello         , I am Paul and we need to negotiate a instant project', date: '01/01/2020', sender: 'pauv-22@unal.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 6, subject: 'Analyst for our company', content: 'Hello, we need an analyst for our company called Cidenet, you can talk with us', date: '01/02/2020', sender: 'cddr33@gmail.com', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 7, subject: 'Bidding project negotiation', content: 'Hello          , I am Carlos and we need to negotiate a bidding project', date: '01/04/2020', sender: 'cmzapata@company.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 8, subject: 'Instant project negotiation', content: 'Hello         , I am Paul and we need to negotiate a instant project', date: '01/01/2020', sender: 'pauv-22@unal.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 9, subject: 'Analyst for our company', content: 'Hello, we need an analyst for our company called Cidenet, you can talk with us', date: '01/02/2020', sender: 'cddr33@gmail.com', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 10, subject: 'Bidding project negotiation', content: 'Hello          , I am Carlos and we need to negotiate a bidding project', date: '01/04/2020', sender: 'cmzapata@company.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 11, subject: 'Instant project negotiation', content: 'Hello         , I am Paul and we need to negotiate a instant project', date: '01/01/2020', sender: 'pauv-22@unal.edu.co', receiver: 'jupvillegasgo@unal.edu.co' },
      { id: 12, subject: 'Analyst for our company', content: 'Hello, we need an analyst for our company called Cidenet, you can talk with us', date: '01/02/2020', sender: 'cddr33@gmail.com', receiver: 'jupvillegasgo@unal.edu.co' }

    ];

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