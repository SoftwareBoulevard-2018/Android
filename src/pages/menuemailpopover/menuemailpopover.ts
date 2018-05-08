//Created by group 9 - module 5
//The necessary components are imported.
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComposeEmailPage } from '../compose-email/compose-email';
import { InboxPage } from '../inbox/inbox';
import { SentemailpagePage } from '../sentemailpage/sentemailpage';

/**
 * Generated class for the MenuemailpopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-menuemailpopover',
  templateUrl: 'menuemailpopover.html',
})
export class MenuemailpopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //This component opens the ComposeEmail component using a routing.
  openComposePage() {
    this.navCtrl.push(ComposeEmailPage);
  }

  //This component opens the InboxPage component using a routing.
  openInboxPage() {
    this.navCtrl.push(InboxPage);
  }
 
  //This component opens the SentemailPage component using a routing.
  openSentPage() {
    this.navCtrl.push(SentemailpagePage);
  }

}
