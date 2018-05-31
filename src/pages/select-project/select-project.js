var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { InstantProjectb } from './../../models/instantProjectb';
import { BiddingProjectb } from './../../models/biddingProjectb';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { Record } from './../../models/record';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SelectProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectProjectPage = /** @class */ (function () {
    function SelectProjectPage(navCtrl, navParams, service, httpService, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.httpService = httpService;
        this.toastController = toastController;
        this.instP = [];
        this.bidP = [];
        this.hService = httpService;
        this.serv = service;
        this.toastCtrl = toastController;
        // this.instP = service.InstProjects;
        // this.bidP = service.bidProjects;
    }
    SelectProjectPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad SelectProjectPage');
        this.getAllBidProjects();
        this.getAllInstProjects();
    };
    SelectProjectPage.prototype.getAllBidProjects = function () {
        var _this = this;
        return this.httpService.getAllBiddingProjects().subscribe(function (data) {
            _this.fillBidProjects(data['data']);
            //console.log(data);      
        });
    };
    SelectProjectPage.prototype.getAllInstProjects = function () {
        var _this = this;
        this.httpService.getAllInstantProjects().subscribe(function (data) {
            _this.fillInstProjects(data['data']);
            //console.log(data);      
        });
    };
    SelectProjectPage.prototype.fillBidProjects = function (projects) {
        var _this = this;
        projects.forEach(function (project) {
            var nip = new BiddingProjectb(JSON.stringify(project).substring(7, 32), project.name, project.numberOfDevelopingQuestionsPerAnalyst, project.numberOfDevelopingQuestionsPerTester, project.numberOfDevelopingQuestionsPerDeveloper, project.rewarded_K, project.time, project.cost, project.required_K, project.required_analyst_level, project.required_developer_level, project.required_tester_level);
            _this.bidP.push(nip);
        });
        console.log(this.bidP);
    };
    SelectProjectPage.prototype.fillInstProjects = function (projects) {
        var _this = this;
        projects.forEach(function (project) {
            var nip = new InstantProjectb(JSON.stringify(project).substring(7, 32), project.name, project.numberOfDevelopingQuestionsPerAnalyst, project.numberOfDevelopingQuestionsPerTester, project.numberOfDevelopingQuestionsPerDeveloper, project.rewarded_K);
            _this.instP.push(nip);
        });
        console.log(this.instP);
    };
    SelectProjectPage.prototype.viewProjectInfo = function (p) {
        var info;
        if (p.required_K == null || p.required_K == undefined) {
            info = "Instant Project Information".concat("\n").concat("Id: ").concat(p.id.toString()).concat("\n").concat("Name: ").concat(p.name).concat("\n").concat("Reward k: ").concat(p.rewarded_K.toString()).concat("\n").concat("No. Analyst Questions: ").concat(p.numberOfDevelopingQuestionsPerAnalyst.toString()).concat("\n").concat("No. Developer Questions: ").concat(p.numberOfDevelopingQuestionsPerDeveloper.toString()).concat("\n").concat("No. Tester Questions: ").concat(p.numberOfDevelopingQuestionsPerTester.toString());
        }
        else {
            info = "Bidding Project Information".concat("\n").concat("Id: ").concat(p.id.toString()).concat("\n").concat("Name: ").concat(p.name).concat("\n").concat("Reward k: ").concat(p.rewarded_K.toString()).concat("\n").concat("No. Analyst Questions: ").concat(p.numberOfDevelopingQuestionsPerAnalyst.toString()).concat("\n").concat("No. Developer Questions: ").concat(p.numberOfDevelopingQuestionsPerDeveloper.toString()).concat("\n").concat("No. Tester Questions: ").concat(p.numberOfDevelopingQuestionsPerTester.toString()).concat("\n").concat("Time: ").concat(p.time.toString()).concat("\n").concat("Cost ").concat(p.cost.toString()).concat("\n").concat("Required K: ").concat(p.required_K.toString()).concat("\n").concat("Required Analyst Level: ").concat(p.required_analyst_level.toString()).concat("\n").concat("Required Developer Level: ").concat(p.required_developer_level.toString()).concat("\n").concat("Required Tester Level: ").concat(p.required_tester_level.toString());
        }
        alert(info);
    };
    SelectProjectPage.prototype.selectProject = function (p) {
        var _this = this;
        this.serv.getCurrentUser().then(function (u) {
            _this.user = u;
            var r = new Record(new Date("12/15/1990"), new Date("12/15/1990"), _this.user.companyId, p.id);
            console.log(r);
            _this.hService.createRecord(r).subscribe(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Record Created',
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
            ;
            alert("Selected");
        });
    };
    SelectProjectPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-select-project',
            templateUrl: 'select-project.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            GeneralServiceService,
            HttpService,
            ToastController])
    ], SelectProjectPage);
    return SelectProjectPage;
}());
export { SelectProjectPage };
//# sourceMappingURL=select-project.js.map