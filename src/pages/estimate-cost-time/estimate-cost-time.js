var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BiddingProject } from './../../models/biddingProject';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Company } from './../../models/company';
import { GeneralServiceService } from './../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { Estimation } from './../../models/estimation';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the EstimateCostTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstimateCostTimePage = /** @class */ (function () {
    //constructor for the page 
    function EstimateCostTimePage(navCtrl, navParams, service, httpService, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.httpService = httpService;
        this.toastController = toastController;
        //here is the vars that we use in the page 
        this.comp = new Company("00000000000null", "Null Company", "No image", 0, 0, 0, 0, 0);
        this.costEst = [];
        this.timeEst = [];
        this.p = new BiddingProject("null", "null", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        this.lastTimeEst = 0;
        this.lastCostEst = 0;
        this.recordsByCompany = [];
        this.toastCtrl = toastController;
        this.hService = httpService;
        service.getCurrentUser().then(function (user) {
            _this.user = user;
            if (!(user.companyId == null)) //check users compani and charge the necesari data for the page 
             {
                httpService.getCompanyById(user.companyId).subscribe(function (comp) {
                    _this.comp = comp;
                    httpService.getRecordsByCompany(_this.comp.id).subscribe(function (data) {
                        var data2 = JSON.parse(JSON.stringify(data));
                        console.log(data2);
                        _this.recordsByCompany = data2;
                        _this.lastRecord = data2[data2.length - 1];
                        console.log(_this.lastRecord.project.substring(1, _this.lastRecord.project.length));
                        httpService.getBiddingProjectById(_this.lastRecord.project.substring(1, _this.lastRecord.project.length)).subscribe(function (p) {
                            _this.p = p;
                            console.log(_this.p);
                        });
                    });
                });
            }
        });
        this.ser = service;
        //this.comp.companyResource = 10;
        //this.p = this.ser.bidProjects[this.comp.active_project]; //property not in company
    }
    ;
    EstimateCostTimePage.prototype.registerRecords = function (data) {
        console.log(data);
    };
    EstimateCostTimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstimateCostTimePage');
    };
    //this function is for calculate de time-costs update company resources
    EstimateCostTimePage.prototype.estimateCostTime = function () {
        var _this = this;
        if (!(this.comp.companyResource > 0)) {
            alert('Not enought K');
            return;
        }
        else {
            var c = this.comp;
            c.companyResource = c.companyResource - 1;
            this.hService.updateCompany(c, this.comp.id).subscribe(//here update de resources
            function () {
                var toast = _this.toastCtrl.create({
                    message: 'Lost 1 resources!',
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
            //this.comp.companyResource = parseInt(this.comp.companyResource.toString()) - 1;
        }
        var ce = this.costTry;
        var te = this.timeTry;
        console.log('ce ' + ce + ' te ' + te);
        this.costEst.push(ce);
        this.timeEst.push(te);
        this.lastCostEst = ce;
        this.lastTimeEst = te;
        var cost = this.p.cost;
        var time = this.p.time;
        console.log('Testing for time ' + this.p.time + ' ' + time);
        console.log('Testing for cost ' + this.p.cost + ' ' + cost);
        //here calculate de estimation 
        var estimation = new Estimation(1000, this.user.name, this.p.name, ce, te, false);
        console.log(time + ' ' + cost);
        console.log(cost + cost * 0.1);
        //here this IF check that stimation are in the range permitted
        if ((ce <= cost + cost * 0.1 && ce >= cost - cost * 0.1) && (te <= time + time * 0.1 && te >= time - time * 0.1)) {
            console.log("Success!!");
            estimation.state = true;
            this.hService.createEstimation(estimation).subscribe(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Estimation suscessfull!',
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
        }
        else {
            console.log(estimation);
            estimation.state = false;
            this.hService.createEstimation(estimation).subscribe(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Keeep trying =D!',
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
        }
        //console.log('The user that got here in estimate is '.concat(this.user.name));
        //console.log('the company id is '.concat(this.user.companyId));
    };
    EstimateCostTimePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-estimate-cost-time',
            templateUrl: 'estimate-cost-time.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            GeneralServiceService,
            HttpService,
            ToastController])
    ], EstimateCostTimePage);
    return EstimateCostTimePage;
}());
export { EstimateCostTimePage };
//# sourceMappingURL=estimate-cost-time.js.map