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
import { UpdatequestPage } from '../updatequest/updatequest';
import { MainPage } from '../../main/main';
import { SetUpPage } from '../set-up';
var QuestlistPage = /** @class */ (function () {
    function QuestlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuestlistPage.prototype.goToUpdatequest = function () {
        this.navCtrl.push(UpdatequestPage);
    };
    QuestlistPage.prototype.goToMain = function () {
        this.navCtrl.push(MainPage);
    };
    QuestlistPage.prototype.goToHome = function () {
        this.navCtrl.push(SetUpPage);
    };
    QuestlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestlistPage');
    };
    QuestlistPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-questlist',
            templateUrl: 'questlist.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], QuestlistPage);
    return QuestlistPage;
}());
export { QuestlistPage };
//# sourceMappingURL=questlist.js.map