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
import { NewprojectPage } from '../newproject/newproject';
import { MainPage } from '../../main/main';
import { SetUpPage } from '../set-up';
import { HttpService } from '../../../app/http.service';
import { UpdateInstantProjectPage } from '../updateInstantProject/updateInstantProject';
var ProjectlistPage = /** @class */ (function () {
    function ProjectlistPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
    }
    ProjectlistPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.httpService.getAllBiddingProjects().subscribe(function (data) {
            _this.biddingProject = data['data'];
        });
        this.httpService.getAllInstantProjects().subscribe(function (data) {
            _this.instantProject = data['data'];
        });
    };
    ProjectlistPage.prototype.updateInstant = function (instantProject) {
        this.navCtrl.push(UpdateInstantProjectPage, { c: instantProject });
    };
    ProjectlistPage.prototype.goToNewproject = function () {
        this.navCtrl.push(NewprojectPage);
    };
    ProjectlistPage.prototype.goToMain = function () {
        this.navCtrl.push(MainPage);
    };
    ProjectlistPage.prototype.goToHome = function () {
        this.navCtrl.push(SetUpPage);
    };
    ProjectlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectlistPage');
    };
    ProjectlistPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-projectlist',
            templateUrl: 'projectlist.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService])
    ], ProjectlistPage);
    return ProjectlistPage;
}());
export { ProjectlistPage };
//# sourceMappingURL=projectlist.js.map