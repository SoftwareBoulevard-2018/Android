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
import { NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../set-up/projectlist/projectlist';
import { QuestlistPage } from '../set-up/questlist/questlist';
import { PuzzlelistPage } from '../set-up/puzzlelist/puzzlelist';
import { NewprojectPage } from '../set-up/newproject/newproject';
import { NewpuzzlePage } from '../set-up/newpuzzle/newpuzzle';
import { UpdatequestPage } from '../set-up/updatequest/updatequest';
import { UpdateparameterPage } from '../set-up/updateparameter/updateparameter';
var SetUpPage = /** @class */ (function () {
    function SetUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SetUpPage.prototype.goToProjectlist = function () {
        this.navCtrl.push(ProjectlistPage);
    };
    SetUpPage.prototype.goToQuestlist = function () {
        this.navCtrl.push(QuestlistPage);
    };
    SetUpPage.prototype.goToPuzzlelist = function () {
        this.navCtrl.push(PuzzlelistPage);
    };
    SetUpPage.prototype.goToNewproject = function () {
        this.navCtrl.push(NewprojectPage);
    };
    SetUpPage.prototype.goToNewpuzzle = function () {
        this.navCtrl.push(NewpuzzlePage);
    };
    SetUpPage.prototype.goToUpdatequest = function () {
        this.navCtrl.push(UpdatequestPage);
    };
    SetUpPage.prototype.goToParameterlist = function () {
        this.navCtrl.push(UpdateparameterPage);
    };
    SetUpPage.prototype.ionViewDidLoad = function () {
        console.log('Inicio page esta cargada');
    };
    SetUpPage = __decorate([
        Component({
            selector: 'set-up',
            templateUrl: 'set-up.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SetUpPage);
    return SetUpPage;
}());
export { SetUpPage };
//# sourceMappingURL=set-up.js.map