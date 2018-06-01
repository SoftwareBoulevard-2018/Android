var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl, navParams, popoverCtrl, service, HttpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.HttpService = HttpService;
        this.emailArray = []; //This is the arrangement that the user has in the outbox
        this.defaultList = []; //This arrangement serves to update the entire list of emails
        //Here we query the current user that is logged and then we do a request to see what emails he has received.
        this.service.getCurrentUser().then(function (user) {
            _this.idUser = user.id;
            _this.HttpService.read(_this.idUser).subscribe(function (data) {
                if (JSON.parse(JSON.stringify(data)).data.length > _this.defaultList.length) {
                    _this.listEmailsReceivedForUser(data);
                }
            });
        });
        //Every 5 seconds the emails are updated, so we need to do the request.
        this.service.getCurrentUser().then(function (user) {
            _this.idUser = user.id;
            Observable.interval(5000).subscribe(function () {
                _this.HttpService.read(_this.idUser).subscribe(function (data) {
                    if (JSON.parse(JSON.stringify(data)).data.length > _this.defaultList.length) {
                        _this.listEmailsReceivedForUser(data);
                    }
                });
            });
        });
    }
    /*
    This method is in charge of updating the array of the inbox email that the user has.
    It receives the data retrieved from the http request that gets the received emails.
    Also we update two arrays, we update emailArray in order to see the inbox and defaultList has all the emails received of
    that user, in case of a search we can go back to all emails with defaulList.
    */
    InboxPage.prototype.listEmailsReceivedForUser = function (data) {
        var dataJson = JSON.parse(JSON.stringify(data));
        this.emailArray = dataJson.data;
        this.defaultList = this.emailArray;
        this.updateDate();
        this.updateSender();
        this.updateState();
    };
    /* This method updates in the view, if the user has read the email.
    Possible States = READ , UNREAD. */
    InboxPage.prototype.updateState = function () {
        for (var i = 0; i < this.emailArray.length; i++) {
            if (this.emailArray[i].acknowledgment.indexOf(this.idUser) >= 0) {
                this.emailArray[i].status = "READ";
            }
            else {
                this.emailArray[i].status = "UNREAD";
            }
        }
    };
    /* This method updates the date of an email in a format easy to read for the user*/
    InboxPage.prototype.updateDate = function () {
        var date;
        for (var i = 0; i < this.emailArray.length; i++) {
            date = this.emailArray[i].createdAt;
            this.emailArray[i].date = moment(date).format('D MMM YYYY, h:mm:ss A');
        }
    };
    /*In this method we update the sender for each email because the response object has an objectID and not username. */
    InboxPage.prototype.updateSender = function () {
        var _this = this;
        this.HttpService.getAllUsers().subscribe(function (data) {
            var sender;
            var dataJson = JSON.parse(JSON.stringify(data));
            var userData = dataJson.data;
            for (var i = 0; i < _this.emailArray.length; i++) {
                sender = _this.emailArray[i].sender;
                for (var j = 0; j < userData.length; j++) {
                    if (sender.localeCompare(userData[j].id) == 0) {
                        _this.emailArray[i].sender = userData[j].username;
                        break;
                    }
                }
            }
        });
    };
    InboxPage.prototype.searchEmail = function () {
        var IDEmailSolution = [];
        var EmailSolution = [];
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
    };
    /*
    This method is responsible for displaying the entire entry mailbox. It is used after
    performing a search.
    */
    InboxPage.prototype.viewFullInbox = function () {
        this.emailArray = this.defaultList;
    };
    /*
    This method allows you to see the menu by clicking on the 3-point icon.
    From there you can access the inbox, outbox and you can go to create a new email.
    */
    InboxPage.prototype.viewEmailMenu = function (myEvent) {
        var popover = this.popoverCtrl.create(MenuemailpopoverPage, {}, { cssClass: 'custom-popover' });
        popover.present({
            ev: myEvent
        });
    };
    /*
    This method is responsible for routing the page where the selected email is read.
    When you read an email, the state is updated because the user has read the email.
    So we do a request to the server to update the acknoledgment of the email.
    */
    InboxPage.prototype.readEmail = function (emailToRead) {
        var _this = this;
        var emails = [];
        this.HttpService.read(this.idUser).subscribe(function (data) {
            var dataJson = JSON.parse(JSON.stringify(data));
            emails = dataJson.data;
            var indiceBusqueda = -1;
            for (var index = 0; index < emails.length; index++) {
                if (emails[index].id == emailToRead.id) {
                    indiceBusqueda = index;
                    break;
                }
            }
            if (emails[indiceBusqueda].acknowledgment == undefined) {
                emails[indiceBusqueda].acknowledgment = [];
                emails[indiceBusqueda].acknowledgment[0] = _this.idUser;
                _this.HttpService.updateState(emails[indiceBusqueda].id, emails[indiceBusqueda]).subscribe();
            }
            else {
                var found = undefined;
                for (var i = 0; i < emails[indiceBusqueda].acknowledgment.length; i++) {
                    if (emails[indiceBusqueda].acknowledgment[i] == _this.idUser) {
                        found = true;
                    }
                }
                if (found == undefined) {
                    emails[indiceBusqueda].acknowledgment.push(_this.idUser);
                    _this.HttpService.updateState(emails[indiceBusqueda].id, emails[indiceBusqueda]).subscribe();
                }
            }
            _this.navCtrl.push(ReademailPage, {
                sender: emailToRead.sender,
                subject: emailToRead.subject,
                content: emailToRead.content,
            });
        });
    };
    InboxPage = __decorate([
        Component({
            selector: 'page-inbox',
            templateUrl: 'inbox.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController,
            GeneralServiceService, HttpService])
    ], InboxPage);
    return InboxPage;
}());
export { InboxPage };
//# sourceMappingURL=inbox.js.map