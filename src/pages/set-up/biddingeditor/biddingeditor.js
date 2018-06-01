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
import { BiddingProject } from '../../../models/biddingProject';
import { HttpService } from '../../../app/http.service';
var BiddingeditorPage = /** @class */ (function () {
    function BiddingeditorPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.submitted = false;
        this.biddingProject = new BiddingProject();
    }
    BiddingeditorPage.prototype.goToProjeclist = function (form) {
        /*var name="1";
        var rewarded_k = 1;
        var amount_tester_question = 1;
        var amount_analyst_question = 1;
        var amount_developer_question = 1;
        var time = 1;
        var cost = 1;
        var required_k = 1;
        var required_analyst_level = 1;
        var required_developer_level = 1;
        var required_tester_level = 1;
        var rewarded_k = 1;
        var biddingProject = new BiddingProject(name, rewarded_k, amount_tester_question, amount_analyst_question, amount_developer_question, time, cost, required_k, required_analyst_level, required_developer_level, required_tester_level);
         this.httpService.createBiddingProject(biddingProject).subscribe((biddingProject) => {
          console.log(biddingProject);
          this.navCtrl.push(ProjectlistPage);
        });;*/
        var _this = this;
        /*this.httpService.createBiddingProject(biddingProject);
          console.log(biddingProject);
            this.navCtrl.push(ProjectlistPage);*/
        this.submitted = true;
        if (form.valid) {
            return this.httpService.createBiddingProject(this.biddingProject).subscribe(function () {
                _this.navCtrl.push(ProjectlistPage);
            });
        }
    };
    BiddingeditorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BiddingeditorPage');
    };
    BiddingeditorPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-biddingeditor',
            templateUrl: 'biddingeditor.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService])
    ], BiddingeditorPage);
    return BiddingeditorPage;
}());
export { BiddingeditorPage };
//# sourceMappingURL=biddingeditor.js.map