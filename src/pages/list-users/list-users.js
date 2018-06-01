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
import { CreateAccountPage } from '../create-account/create-account';
import { ViewAccountPage } from '../account/account';
import { EditAccountPage } from '../edit-account/edit-account';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { NavController } from 'ionic-angular';
/**
 * shows a list with all users.
 *
 * also shows a FAB to create a new user and each user has
 * a edit button and can be viewed by taping in the name.
 */
var ListUsersPage = /** @class */ (function () {
    function ListUsersPage(navCtrl, service, httpService) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.httpService = httpService;
        this.users = [];
    }
    ListUsersPage.prototype.ionViewDidEnter = function () {
        this.users = [];
        this.getAllUsers();
    };
    ListUsersPage.prototype.getAllUsers = function () {
        var _this = this;
        return this.httpService.getAllUsers().subscribe(function (data) { return _this.addCompanies(data['data']); });
    };
    /**
     * search and add a company instance for each user
     */
    ListUsersPage.prototype.addCompanies = function (users) {
        var _this = this;
        users.forEach(function (user) {
            if (user.companyId) {
                _this.httpService.getCompanyById(user.companyId).subscribe(function (company) {
                    user.company = company;
                    user.companyName = company.name;
                }, function (error) {
                    console.log(error);
                    user.company = undefined;
                    user.companyName = undefined;
                });
            }
            _this.users.push(user);
        });
    };
    ListUsersPage.prototype.viewUser = function (user) {
        this.navCtrl.push(ViewAccountPage, {
            u: user
        });
    };
    ListUsersPage.prototype.createUser = function () {
        this.navCtrl.push(CreateAccountPage);
    };
    ListUsersPage.prototype.editUser = function (user) {
        this.navCtrl.push(EditAccountPage, {
            u: user
        });
    };
    ListUsersPage = __decorate([
        Component({
            selector: 'list-users',
            templateUrl: 'list-users.html'
        }),
        __metadata("design:paramtypes", [NavController,
            GeneralServiceService,
            HttpService])
    ], ListUsersPage);
    return ListUsersPage;
}());
export { ListUsersPage };
//# sourceMappingURL=list-users.js.map