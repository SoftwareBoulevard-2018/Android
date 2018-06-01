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
import { ViewCompanyPage } from '../company/company';
import { EditCompanyPage } from '../edit-company/edit-company';
import { CreateCompanyPage } from '../create-company/create-company';
import { HttpService } from '../../app/http.service';
import { NavController } from 'ionic-angular';
/**
 * shows a list with all companies.
 *
 * also shows a FAB to create a new company and each company has
 * a edit button and can be viewed by taping in the name/image.
 */
var ListCompaniesPage = /** @class */ (function () {
    function ListCompaniesPage(navCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
    }
    ListCompaniesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.httpService.getAllCompanies().subscribe(function (data) {
            _this.companies = data['data'];
        });
    };
    ListCompaniesPage.prototype.viewCompany = function (company) {
        this.navCtrl.push(ViewCompanyPage, {
            c: company
        });
    };
    ListCompaniesPage.prototype.createCompany = function () {
        this.navCtrl.push(CreateCompanyPage);
    };
    ListCompaniesPage.prototype.editCompany = function (company) {
        this.navCtrl.push(EditCompanyPage, {
            c: company
        });
    };
    ListCompaniesPage = __decorate([
        Component({
            selector: 'list-companies',
            templateUrl: 'list-companies.html'
        }),
        __metadata("design:paramtypes", [NavController,
            HttpService])
    ], ListCompaniesPage);
    return ListCompaniesPage;
}());
export { ListCompaniesPage };
//# sourceMappingURL=list-companies.js.map