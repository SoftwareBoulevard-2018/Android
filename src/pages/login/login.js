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
import { NavController, ToastController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { MainPage } from '../main/main';
import { HttpService } from '../../app/http.service';
/**
 * shows the login form and validates the data, shows a toast if invalid.
 * also shows the curren apiURL and a button to change it
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, service, httpService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.httpService = httpService;
        this.toastCtrl = toastCtrl;
        this.login = { username: '', password: '' };
        this.submitted = false;
        this.apiOld = HttpService.apiURL;
    }
    /**
     * validates the received form and if correct logs in.
     * @param form login form to be validated
     */
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        if (!form.valid)
            return false;
        this.submitted = true;
        this.httpService.login(this.login.username, this.login.password).subscribe(function (user) {
            _this.service.login(user).then(function () {
                _this.navCtrl.setRoot(MainPage, {
                    role: user.role
                });
            });
        }, function () {
            var toast = _this.toastCtrl.create({
                message: 'Username or password incorrect',
                duration: 3000
            });
            toast.present();
        });
    };
    LoginPage.prototype.changeAPI = function (form) {
        HttpService.apiURL = form.value['api'];
    };
    LoginPage = __decorate([
        Component({
            selector: 'login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController,
            GeneralServiceService,
            HttpService,
            ToastController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map