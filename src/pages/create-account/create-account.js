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
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { HttpService } from '../../app/http.service';
/**
 * shows and validates a form used to create a new account
 */
var CreateAccountPage = /** @class */ (function () {
    function CreateAccountPage(navCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.user = new User();
        this.submitted = false;
        this.password_confirm = "";
        //TODO: get roles from server
        this.roles = ['Project Manager', 'Analyst', 'Developer', 'Tester'];
    }
    CreateAccountPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            //TODO: validate if password_confirm === password
            return this.httpService.createUser(this.user).subscribe(function () {
                _this.navCtrl.pop();
            });
        }
    };
    CreateAccountPage = __decorate([
        Component({
            selector: 'create-account',
            templateUrl: 'create-account.html'
        }),
        __metadata("design:paramtypes", [NavController,
            HttpService])
    ], CreateAccountPage);
    return CreateAccountPage;
}());
export { CreateAccountPage };
//# sourceMappingURL=create-account.js.map