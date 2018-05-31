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
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ReademailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReademailPage = /** @class */ (function () {
    /*
    The variables that will show the email information based on the parameters delivered
    by the inbox or sent component are updated, depending on the case.
    */
    function ReademailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.From = navParams.get('sender');
        this.Subject = navParams.get('subject');
        this.Content = navParams.get('content');
    }
    __decorate([
        ViewChild('myInput'),
        __metadata("design:type", ElementRef)
    ], ReademailPage.prototype, "myInput", void 0);
    ReademailPage = __decorate([
        Component({
            selector: 'page-reademail',
            templateUrl: 'reademail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ReademailPage);
    return ReademailPage;
}());
export { ReademailPage };
//# sourceMappingURL=reademail.js.map