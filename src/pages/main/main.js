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
import { ListUsersPage } from '../list-users/list-users';
import { ListCompaniesPage } from '../list-companies/list-companies';
import { SetUpPage } from '../set-up/set-up';
import { ReportsPage } from '../reports/reports';
import { CreateAccountPage } from '../create-account/create-account';
import { CreateCompanyPage } from '../create-company/create-company';
import { Events, NavController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
/**
 * shows cards for each user role.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, events, service, httpService) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.service = service;
        this.httpService = httpService;
    }
    /**
     * if this view is reopened we need to obtain the role.
     *
     */
    MainPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getCurrentUser().then(function (user) {
            _this.user_type = user.role;
            _this.user_name = user.name;
            _this.user_company = user.companyId;
            _this.httpService.getUserById(user.id).subscribe(function (u_user) {
                _this.user_level = u_user.competencyLevel;
                _this.httpService.getCompanyById(_this.user_company).subscribe(function (company) {
                    _this.company_resources = company.companyResource;
                });
                _this.httpService.getUsersByCompany(_this.user_company).subscribe(function (users) {
                    _this.company_members = users.length;
                });
            });
        });
        //show the number of users and companies in some cards
        this.httpService.getReports().subscribe(function (report) {
            _this.users = report['users'];
            _this.companies = report['companies'];
        });
        console.log("ionViewWillEnter");
    };
    MainPage.prototype.viewUsers = function () {
        this.navCtrl.push(ListUsersPage);
    };
    MainPage.prototype.viewCompanies = function () {
        this.navCtrl.push(ListCompaniesPage);
    };
    MainPage.prototype.viewReports = function (type) {
        this.navCtrl.push(ReportsPage, {
            reportsType: type
        });
    };
    MainPage.prototype.viewSetUp = function () {
        this.navCtrl.push(SetUpPage);
    };
    MainPage.prototype.createUser = function () {
        this.navCtrl.push(CreateAccountPage);
    };
    MainPage.prototype.createCompany = function () {
        this.navCtrl.push(CreateCompanyPage);
    };
    MainPage.prototype.print_data = function (data) {
        console.log(data);
    };
    MainPage = __decorate([
        Component({
            selector: 'main-page',
            templateUrl: 'main.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Events,
            GeneralServiceService,
            HttpService])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.js.map