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
import { NewpuzzlePage } from '../newpuzzle/newpuzzle';
import { MainPage } from '../../main/main';
import { SetUpPage } from '../set-up';
var PuzzlelistPage = /** @class */ (function () {
    function PuzzlelistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PuzzlelistPage.prototype.goToNewpuzzle = function () {
        this.navCtrl.push(NewpuzzlePage);
    };
    PuzzlelistPage.prototype.goToMain = function () {
        this.navCtrl.push(MainPage);
    };
    PuzzlelistPage.prototype.goToHome = function () {
        this.navCtrl.push(SetUpPage);
    };
    PuzzlelistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PuzzlelistPage');
    };
    PuzzlelistPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-puzzlelist',
            templateUrl: 'puzzlelist.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PuzzlelistPage);
    return PuzzlelistPage;
}());
export { PuzzlelistPage };
//# sourceMappingURL=puzzlelist.js.map