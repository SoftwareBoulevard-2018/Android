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
import { Platform } from 'ionic-angular';
import { HttpService } from '../../app/http.service';
import { NavController, NavParams } from 'ionic-angular';
/**
 * shows a list with the subset of reports
 * based on the received parameters.
 *
 * current reports:
 *  Companies by K:            Bar chart
 *  Companies by Resources:    Pie chart
 *  Top 5 users by efficiency: List
 *  Top 5 users by activity:   List
 */
var ReportsPage = /** @class */ (function () {
    function ReportsPage(navCtrl, navParams, platform, httpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.httpService = httpService;
        this.companiesReports = false;
        this.usersReports = false;
        this.view = [];
        this.companyK = [];
        this.companyResource = [];
        this.topEfficentUsers = [];
        this.topActiveUsers = [];
        this.colorScheme = {
            domain: ['#00585E', '#009494', '#454445', '#FF5729', '#00B27D', '#29FFBF', '#5E2700', '#AB4600', '#911E0F']
        };
        //set of reports to show
        if (navParams.get("reportsType") === "companies") {
            this.companiesReports = true;
        }
        else if (navParams.get("reportsType") === "users") {
            this.usersReports = true;
        }
        else {
            this.companiesReports = true;
            this.usersReports = true;
        }
        platform.ready().then(function () {
            _this.view = [platform.width() - 20, 350];
        });
        /**
         * obtention of data for reports
         */
        this.httpService.getAllCompanies().subscribe(function (data) {
            data['data'].forEach(function (company) {
                var entryK = { name: company.name, value: company.capacityK };
                _this.companyK = _this.companyK.concat([entryK]);
                var entryResource = { name: company.name, value: company.companyResource };
                _this.companyResource = _this.companyResource.concat([entryResource]);
            });
        });
        this.httpService.getAllUsers().subscribe(function (data) {
            data['data'].forEach(function (user) {
                user.efficiency = 0;
                if (user.resourcesSpent) {
                    user.efficiency = ((user.correctProjectQuestions + user.correctTrainingQuestions) / (user.resourcesSpent) * 100).toFixed(2);
                }
            });
            var orden = data['data'].sort(function (a, b) { return b.efficiency - a.efficiency; });
            _this.topEfficentUsers = orden.slice(0, 5);
            orden = data['data'].sort(function (a, b) { return b.resourcesSpent - a.resourcesSpent; });
            _this.topActiveUsers = orden.slice(0, 5);
        });
    }
    ReportsPage = __decorate([
        Component({
            selector: 'reports',
            templateUrl: 'reports.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Platform,
            HttpService])
    ], ReportsPage);
    return ReportsPage;
}());
export { ReportsPage };
//# sourceMappingURL=reports.js.map