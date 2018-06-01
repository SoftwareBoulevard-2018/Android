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
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpService } from '../../app/http.service';
import { GeneralServiceService } from '../../app/general-service.service';
import { Email } from '../../models/email';
/**
 * Generated class for the ComposeEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComposeEmailPage = /** @class */ (function () {
    function ComposeEmailPage(navCtrl, navParams, service, HttpService, toastCtrl) {
        //Get all users and update receivers Array.
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.HttpService = HttpService;
        this.toastCtrl = toastCtrl;
        this.HttpService.getAllUsers().subscribe(function (data) {
            var dataJson = JSON.parse(JSON.stringify(data));
            _this.receivers = dataJson.data;
        });
    }
    /*
    This method is used to resize the space that the user has for writting the content of the email.
    */
    ComposeEmailPage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    /*
    This method is used to send an email. (ACCORDING TO USES CASES).
    According to user session, we create an email object to send an email.
    Then we send a message according to the status of the email to send.
    */
    ComposeEmailPage.prototype.send = function () {
        var _this = this;
        var receiversObjectID = [""];
        for (var index = 0; index < this.receiversSelectedByUser.length; index++) {
            receiversObjectID[index] = this.receiversSelectedByUser[index]['id'];
        }
        this.service.getCurrentUser().then(function (user) {
            _this.sender = user.id;
            var emailToSend = new Email(_this.sender, _this.subject, receiversObjectID, _this.content);
            /*We are sending a notification, depending if the email is sent or not*/
            _this.HttpService.send(emailToSend).subscribe(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Email sent',
                    duration: 3000
                });
                toast.present();
            }, function () {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    __decorate([
        ViewChild('myInput'),
        __metadata("design:type", ElementRef)
    ], ComposeEmailPage.prototype, "myInput", void 0);
    ComposeEmailPage = __decorate([
        Component({
            selector: 'page-compose-email',
            templateUrl: 'compose-email.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            GeneralServiceService, HttpService,
            ToastController])
    ], ComposeEmailPage);
    return ComposeEmailPage;
}());
export { ComposeEmailPage };
//# sourceMappingURL=compose-email.js.map