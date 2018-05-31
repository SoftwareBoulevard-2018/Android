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
import { ProjectlistPage } from '../projectlist/projectlist';
import { InstantProject } from '../../../models/instantProject';
import { HttpService } from '../../../app/http.service';
var InstanteditorPage = /** @class */ (function () {
    function InstanteditorPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.submitted = false;
        this.instantProject = new InstantProject();
    }
    InstanteditorPage.prototype.goToProjeclist = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            return this.httpService.createInstantProject(this.instantProject).subscribe(function () {
                _this.navCtrl.push(ProjectlistPage);
            });
        }
    };
    InstanteditorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstanteditorPage');
    };
    InstanteditorPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-instanteditor',
            templateUrl: 'instanteditor.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService])
    ], InstanteditorPage);
    return InstanteditorPage;
}());
export { InstanteditorPage };
//# sourceMappingURL=instanteditor.js.map