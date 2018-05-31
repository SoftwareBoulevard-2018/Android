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
 * shows and validates a form used to update an account
 */
var EditAccountPage = /** @class */ (function () {
    function EditAccountPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.submitted = false;
        //TODO: get roles from server
        this.roles = ['Project Manager', 'Analyst', 'Developer', 'Tester'];
        this.user = this.navParams.data.u;
    }
    EditAccountPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            return this.httpService.updateUser(this.user, this.user.id).subscribe(function () {
                _this.navCtrl.pop();
            });
        }
    };
    EditAccountPage = __decorate([
        Component({
            selector: 'edit-account',
            templateUrl: 'edit-account.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService])
    ], EditAccountPage);
    return EditAccountPage;
}());
export { EditAccountPage };
//# sourceMappingURL=edit-account.js.map