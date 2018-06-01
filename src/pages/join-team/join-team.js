var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpService } from '../../app/http.service';
import { GeneralServiceService } from '../../app/general-service.service';
/**
 * Generated class for the JoinTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoinTeamPage = /** @class */ (function () {
    function JoinTeamPage(navCtrl, navParams, alertCtrl, service, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.httpService = httpService;
        this.invitationPending = false;
        //invitations: Array<any>  = ["The defenders", "Guardians of the Galaxy", "Avengers"];
        this.noInvita = true;
        this.invita = true;
        this.buttonshid = true;
        this.infohid = true;
        //Information to retrieve from server in the next deliverable
        this.teamName = "Fellowship of the ring";
        this.teamMessage = "One Project Manager wants you to be part of his company, do you want to accept the invitation?";
    }
    JoinTeamPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getCurrentUser().then(function (user) {
            console.log(user.id);
            _this.httpService.getInvitationByUserAndState(user.id, "pending").subscribe(function (invitation) {
                console.log(invitation);
                console.log(invitation.length);
                if (invitation.length == 1) {
                    _this.httpService.getCompanyById(invitation[0].company).subscribe(function (company) {
                        _this.teamName = company.name;
                    });
                    _this.invitation = invitation[0];
                    _this.haveInvitations();
                }
                else {
                    _this.noInvitations();
                }
            });
        });
    };
    //Hide invitation, show only the no invitations message
    JoinTeamPage.prototype.noInvitations = function () {
        this.noInvita = false;
        this.invita = true;
        this.buttonshid = true;
        this.infohid = true;
    };
    //Show the invitation
    JoinTeamPage.prototype.haveInvitations = function () {
        this.noInvita = true;
        this.invita = false;
        this.buttonshid = false;
        this.infohid = false;
    };
    //Show alert when the invitation was accepted, should be updated to actually join the team when the server is available
    JoinTeamPage.prototype.showAccepted = function () {
        var _this = this;
        this.invitation.state = "accepted";
        console.log(this.invitation);
        this.httpService.updateInvitation(this.invitation, this.invitation._id).subscribe(function () {
            _this.httpService.getUserById(_this.invitation.user).subscribe(function (user) {
                user.companyId = _this.invitation.company;
                _this.httpService.updateUser(user, _this.invitation.user).subscribe(function () {
                    var alert = _this.alertCtrl.create({
                        title: 'Invitation accepted',
                        message: 'Congratulations! You have joined ' + _this.teamName,
                        buttons: ['Dismiss']
                    });
                    alert.present();
                    _this.noInvitations();
                });
            });
        });
    };
    //Show alert when the invitation was rejected
    JoinTeamPage.prototype.showRejected = function () {
        var _this = this;
        this.invitation.state = "rejected";
        console.log(this.invitation);
        this.httpService.updateInvitation(this.invitation, this.invitation._id).subscribe(function () {
            var alert = _this.alertCtrl.create({
                title: 'Invitation rejected',
                message: 'You have rejected ' + _this.teamName + "'s invitation",
                buttons: ['Dismiss']
            });
            alert.present();
            _this.noInvitations();
        });
    };
    //Automatically generated code
    JoinTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoinTeamPage');
    };
    //Refresher
    JoinTeamPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
            _this.service.getCurrentUser().then(function (user) {
                _this.httpService.getInvitationByUserAndState(user.id, "pending").subscribe(function (invitation) {
                    console.log(invitation);
                    console.log(invitation.length);
                    if (invitation.length == 1) {
                        _this.httpService.getCompanyById(invitation[0].company).subscribe(function (company) {
                            _this.teamName = company.name;
                        });
                        _this.invitation = invitation[0];
                        _this.haveInvitations();
                    }
                    else {
                        _this.noInvitations();
                    }
                });
            });
        }, 2000);
    };
    JoinTeamPage.prototype.print_data = function (data) {
        console.log(data);
    };
    JoinTeamPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-join-team',
            templateUrl: 'join-team.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            GeneralServiceService,
            HttpService])
    ], JoinTeamPage);
    return JoinTeamPage;
}());
export { JoinTeamPage };
//# sourceMappingURL=join-team.js.map