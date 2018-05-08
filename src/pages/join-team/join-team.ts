import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the JoinTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-team',
  templateUrl: 'join-team.html',
})
export class JoinTeamPage {
  invitationPending: boolean = false;
  //invitations: Array<any>  = ["The defenders", "Guardians of the Galaxy", "Avengers"];
  noInvita: boolean = false;
  invita: boolean = true;
  buttonshid: boolean = true;
  infohid: boolean = true

  teamName: string = "Fellowship of the ring";
  teamMessage: string = "A day may come, when the courage of men fails, when we forsake our friends and break all bonds of Fellowship, but it is not this day! This day we code!";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
    
  }

  noInvitations(){
    this.noInvita = false;
    this.invita = true;
    this.buttonshid = true;
    this.infohid = true
  }
  haveInvitations(){
    this.noInvita = true;
    this.invita = false;
    this.buttonshid = false;
    this.infohid = false;
  }

  showAccepted() {
    let alert = this.alertCtrl.create({
      title: 'Invitation accepted',
      message: 'Congratulations! You have joined ' + this.teamName,
      buttons: ['Dismiss']
    });
    alert.present();
    this.noInvitations();
  }
  showRejected() {
    let alert = this.alertCtrl.create({
      title: 'Invitation rejected',
      message: 'You have rejected ' + this.teamName + "'s invitation",
      buttons: ['Dismiss']
    });
    alert.present();
    this.noInvitations();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinTeamPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
      this.haveInvitations();
    }, 2000);
  }


}
