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

  openComposePage() {
    this.navCtrl.push(ComposeEmailPage);
  }

  openInboxPage() {
    this.navCtrl.push(InboxPage);
  }
  //Falta
  openSentPage() {
    this.navCtrl.push(SentemailpagePage);
  }

}
