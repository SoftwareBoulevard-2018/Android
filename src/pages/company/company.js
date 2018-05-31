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
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../app/http.service';
/**
 * shows information and members of
 * a company received in the param "c"
 */
var ViewCompanyPage = /** @class */ (function () {
    function ViewCompanyPage(navCtrl, navParams, httpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.project_manager = "none";
        this.members = [];
        this.company = navParams.get("c");
        //get all members of the company including the project manager
        httpService.getUsersByCompany(this.company.id).subscribe(function (users) {
            users.forEach(function (user) {
                if (user.role === 'Project Manager') {
                    _this.project_manager = user.name;
                }
                _this.members.push(user);
            });
        });
    }
    ViewCompanyPage = __decorate([
        Component({
            selector: 'company',
            templateUrl: 'company.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService])
    ], ViewCompanyPage);
    return ViewCompanyPage;
}());
export { ViewCompanyPage };
//# sourceMappingURL=company.js.map