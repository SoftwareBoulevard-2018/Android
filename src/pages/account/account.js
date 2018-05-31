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
import { AlertController, NavController, NavParams, Platform } from 'ionic-angular';
/**
 * shows information about
 * an account received in param "u"
 */
var ViewAccountPage = /** @class */ (function () {
    function ViewAccountPage(alertCtrl, nav, platform, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.platform = platform;
        this.navParams = navParams;
        this.cards = [];
        this.colorScheme = {
            domain: ['#00585E', '#009494', '#454445', '#FF5729', '#00B27D', '#29FFBF', '#5E2700', '#AB4600', '#911E0F']
        };
        this.user = navParams.get("u");
        //calculate efficiency
        this.user.efficiency = 0;
        if (this.user.resourcesSpent) {
            this.user.efficiency = ((this.user.correctProjectQuestions + this.user.correctTrainingQuestions) / (this.user.resourcesSpent) * 100).toFixed(2);
        }
        //create cards with information if available
        if (this.user.competencyLevel)
            this.cards = this.cards.concat([{ name: "Competency level", value: this.user.competencyLevel }]);
        if (this.user.efficiency)
            this.cards = this.cards.concat([{ name: "Efficiency", value: this.user.efficiency + "%" }]);
        if (this.user.resourcesSpent)
            this.cards = this.cards.concat([{ name: "Resources Spent", value: this.user.resourcesSpent }]);
        //finds the size of the cards
        platform.ready().then(function () {
            _this.view = [platform.width(), 350];
        });
    }
    ViewAccountPage = __decorate([
        Component({
            selector: 'page-account',
            templateUrl: 'account.html'
        }),
        __metadata("design:paramtypes", [AlertController,
            NavController,
            Platform,
            NavParams])
    ], ViewAccountPage);
    return ViewAccountPage;
}());
export { ViewAccountPage };
//# sourceMappingURL=account.js.map