import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpService } from '../../app/http.service';

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

  //Information to retrieve from server in the next deliverable
  teamName: string = "Fellowship of the ring";
  teamMessage: string = "A day may come, when the courage of men fails, when we forsake our friends and break all bonds of Fellowship, but it is not this day! This day we code!";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public httpService: HttpService
  ) {


  }
  //Hide invitation, show only the no invitations message
  noInvitations(){
    this.noInvita = false;
    this.invita = true;
    this.buttonshid = true;
    this.infohid = true
  }
  //Show the invitation
  haveInvitations(){
    this.noInvita = true;
    this.invita = false;
    this.buttonshid = false;
    this.infohid = false;
  }
  //Show alert when the invitation was accepted, should be updated to actually join the team when the server is available
  showAccepted() {
    let alert = this.alertCtrl.create({
      title: 'Invitation accepted',
      message: 'Congratulations! You have joined ' + this.teamName,
      buttons: ['Dismiss']
    });
    alert.present();
    this.noInvitations();
  }
  //Show alert when the invitation was rejected
  showRejected() {
    let alert = this.alertCtrl.create({
      title: 'Invitation rejected',
      message: 'You have rejected ' + this.teamName + "'s invitation",
      buttons: ['Dismiss']
    });
    alert.present();
    this.noInvitations();
  }
  //Automatically generated code
  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinTeamPage');
    this.httpService.getTrainingAttemptsByState("wrong").subscribe(data => this.print_data(data))
  }
  //Refresher
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
      this.haveInvitations();
    }, 2000);
  }

  print_data(data){
    console.log(data)
  }

}
