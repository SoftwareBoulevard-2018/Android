import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpService } from '../../app/http.service';
import { Invitation } from './../../models/invitation';
import { GeneralServiceService } from '../../app/general-service.service';

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
  noInvita: boolean = true;
  invita: boolean = true;
  buttonshid: boolean = true;
  infohid: boolean = true

  //Information to retrieve from server in the next deliverable
  teamName: string = "Fellowship of the ring";
  teamMessage: string = "One Project Manager wants you to be part of his company, do you want to accept the invitation?";
  invitation: Invitation;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public service: GeneralServiceService,
    public httpService: HttpService
  ) {


  }


  ionViewWillEnter() {
    this.service.getCurrentUser().then((user) => {
      this.httpService.getInvitationByUserAndState(user.id,"pending").subscribe((invitation) => {
              if (invitation.length == 1) {
                this.httpService.getCompanyById(invitation[0].company).subscribe((company) => {
                    this.teamName = company.name;
                });
                this.invitation = invitation[0];
                this.haveInvitations();
              }else{
                this.noInvitations();
              }
              
            }
      );      
    });


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
    this.invitation.state = "accepted";
    this.httpService.updateInvitation(this.invitation, this.invitation._id).subscribe(() => {
        this.httpService.getUserById(this.invitation.user).subscribe(user => {
          user.companyId = this.invitation.company;
          this.httpService.updateUser(user, this.invitation.user).subscribe(() => {
            let alert = this.alertCtrl.create({
              title: 'Invitation accepted',
              message: 'Congratulations! You have joined ' + this.teamName,
              buttons: ['Dismiss']
            });
            alert.present();
            this.noInvitations();
          });


        });
    });
 
  }

  //Show alert when the invitation was rejected
  showRejected() {
    this.invitation.state = "rejected";
    this.httpService.updateInvitation(this.invitation, this.invitation._id).subscribe(() => {
      let alert = this.alertCtrl.create({
        title: 'Invitation rejected',
        message: 'You have rejected ' + this.teamName + "'s invitation",
        buttons: ['Dismiss']
      });
      alert.present();
      this.noInvitations();
    });
  }

  //Refresher
  doRefresh(refresher) {

    setTimeout(() => {
      refresher.complete();

      this.service.getCurrentUser().then((user) => {

        this.httpService.getInvitationByUserAndState(user.id,"pending").subscribe((invitation) => {
            if (invitation.length == 1) {
              this.httpService.getCompanyById(invitation[0].company).subscribe((company) => {
                this.teamName = company.name;
              });
              this.invitation = invitation[0];
              this.haveInvitations();
            }else{
              this.noInvitations();
            }
                
          }
        );       
      });

    }, 2000);
  }


}
