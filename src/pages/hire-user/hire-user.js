var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { EditAccountPage } from '../edit-account/edit-account';
//import { Company } from '../../models/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*
import { CreateAccountPage } from '../create-account/create-account';
import { EditAccountPage } from '../edit-account/edit-account';
*/
import { ViewAccountPage } from '../account/account';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { Email } from '../../models/email';
import { ToastController } from 'ionic-angular';
import { Invitation } from '../../models/invitation';
/**
 * Generated class for the HireUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 
 Backend for the hire user page
 */
var HireUserPage = /** @class */ (function () {
    function HireUserPage(//Basic things for create the page 
    navCtrl, navParams, service, httpService, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.httpService = httpService;
        this.toastController = toastController;
        this.hService = httpService;
        this.serv = this.service;
        this.toastCtrl = toastController;
    }
    HireUserPage.prototype.ionViewDidEnter = function () {
        this.users = [];
        this.getAllUsers();
    };
    HireUserPage.prototype.getAllUsers = function () {
        var _this = this;
        return this.httpService.getAllUsers().subscribe(function (data) { return _this.addCompanies(data['data']); });
    };
    HireUserPage.prototype.addCompanies = function (users) {
        var _this = this;
        users.forEach(function (user) {
            _this.httpService.getCompanyById(user.companyId).subscribe(function (company) {
                user.company = company;
                user.companyName = company.name;
                _this.users.push(user);
                //Fills the array
            }, function (error) {
                console.log(error);
                user.company = undefined;
                user.companyName = undefined;
                _this.users.push(user);
            });
        });
    };
    //Displays the users info in another page
    HireUserPage.prototype.viewUser = function (user) {
        this.navCtrl.push(ViewAccountPage, {
            u: user
        });
    };
    HireUserPage.prototype.hireUser = function (user) {
        var _this = this;
        var sender;
        this.serv.getCurrentUser().then(function (u) {
            console.log(u);
            sender = u.id;
            var reciver = user.id;
            var email = new Email(sender, "Recruitment", [reciver], "You are invited to our team, join us =D");
            console.log(email);
            //Sends the email, and clech for errors
            _this.httpService.send(email).subscribe(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Email sent to ' + user.name + '!',
                    duration: 3000
                    //a messege is print if successfull
                });
                toast.present();
            }, function () {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000
                    //a messege is print if not successfull
                });
                toast.present();
            });
            //Creates the invitation, and checks for request errors
            var invitation = new Invitation("0000", user.id, u.companyId, 'pending');
            console.log(invitation);
            _this.hService.createinvitations(invitation).subscribe(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Invitation sent to ' + user.name + '!',
                    duration: 3500
                    //a messege is print if successfull
                });
                toast.present();
            }, function () {
                var toast = _this.toastCtrl.create({
                    message: 'Something went wrong',
                    duration: 3000
                    //a messege is print if not successfull
                });
                toast.present();
            });
        });
    };
    HireUserPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-hire-user',
            templateUrl: 'hire-user.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            GeneralServiceService,
            HttpService,
            ToastController])
    ], HireUserPage);
    return HireUserPage;
}());
export { HireUserPage };
//# sourceMappingURL=hire-user.js.map