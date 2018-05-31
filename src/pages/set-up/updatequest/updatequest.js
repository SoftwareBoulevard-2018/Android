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
import { QuestlistPage } from '../questlist/questlist';
import { Questions } from '../../../models/questions';
import { HttpService } from '../../../app/http.service';
var UpdatequestPage = /** @class */ (function () {
    function UpdatequestPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.submitted = false;
        this.questions = new Questions();
    }
    UpdatequestPage.prototype.goToQuestlist = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            return this.httpService.createQuestion(this.questions).subscribe(function () {
                _this.navCtrl.push(QuestlistPage);
            });
        }
    };
    UpdatequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatequestPage');
    };
    UpdatequestPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-updatequest',
            templateUrl: 'updatequest.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService])
    ], UpdatequestPage);
    return UpdatequestPage;
}());
export { UpdatequestPage };
//# sourceMappingURL=updatequest.js.map