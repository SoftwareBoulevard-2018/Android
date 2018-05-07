import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MenuemailpopoverPage } from '../../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../../pages/reademail/reademail';

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
  searchQuery: String;
  private emailArray;
  private defaultList;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl:PopoverController) {

    //Colocarlo en un servicio.

    this.emailArray = [
      {
        "id": 15,
        "subject": "We should change our time for the project",
        "sender": "jupvillegasgo@company.edu.co",
        "content": "Hello , I was checking our project and I think we need to estimate more time ",
        "receiver": ["cmzapata@company.edu.co", "jsnino@company.edu.co", "jorgitopro@company.edu.co", "paula_001@company.edu.co"],
        "date": '01/02/2019'
      },
      {
        "id": 16,
        "subject": "We should change our cost for the project",
        "sender": "jupvillegasgo@company.edu.co",
        "content": "Hello , I was checking our project and I think we need to estimate more cost",
        "receiver": ["eealpalav@cidenet.edu.co", "esalvarezpi@unal.edu.co", "bandradea@unal.edu.co", "scardonac@unal.edu.co", "hdgilh@unal.edu.co"],
        "date": '01/03/2019'
      },
      {
        "id": 17,
        "subject": "We should change our time for project",
        "sender": "jupvillegasgo@company.edu.co",
        "content": "Hello , I was checking our project and I think we need to estimate more time ",
        "receiver": ["lfbustamantea@company.edu.co", "sarbelaezc@company.edu.co", "jmespinosag@company.edu.co", "vgaviriam@company.edu.co", "afcalderad@company.edu.co"],
        "date": '01/04/2019'
      },
      {
        "id": 18,
        "subject": "We need an analyst for our company",
        "sender": "jupvillegasgo@company.edu.co",
        "content": "Hello ,  We need an analyst for our company. Just send your CV",
        "receiver": ["darias@unal.edu.co", "ldpenal@unal.edu.co"],
        "date": '01/05/2019'
      }
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
