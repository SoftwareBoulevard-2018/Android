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
import { NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpService } from '../../app/http.service';
/**
 * shows and validates a form used to update a company received in param c
 */
var EditCompanyPage = /** @class */ (function () {
    function EditCompanyPage(navCtrl, navParams, httpService, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
        this.lacking_project_manager = true;
        this.changedImage = false;
        this.company = this.navParams.data.c;
        this.getCurrentProjectManager(this.company.id);
    }
    EditCompanyPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
            _this.changedImage = true;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    EditCompanyPage.prototype.uploadImage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading image..."
        });
        loader.present();
        return this.httpService.uploadCompanyImage(this.imageURI)
            .then(function (data) {
            _this.company.image = data.response;
            console.log(data + " Uploaded Successfully");
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    EditCompanyPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditCompanyPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        //if the image was changed, upload it
        if (form.valid) {
            if (this.changedImage) {
                this.uploadImage().then(function () {
                    _this.httpService.updateCompany(_this.company, _this.company.id).subscribe(function () {
                        if (_this.project_manager !== undefined && _this.project_manager !== null && _this.project_manager !== '') {
                            return _this.httpService.updateUser({ companyId: _this.company.id }, _this.project_manager).subscribe(function () {
                                _this.navCtrl.pop();
                            });
                        }
                        else {
                            _this.navCtrl.pop();
                        }
                    });
                });
            }
            else {
                this.httpService.updateCompany(this.company, this.company.id).subscribe(function () {
                    if (_this.project_manager !== undefined && _this.project_manager !== null && _this.project_manager !== '') {
                        return _this.httpService.updateUser({ companyId: _this.company.id }, _this.project_manager).subscribe(function () {
                            _this.navCtrl.pop();
                        });
                    }
                    else {
                        _this.navCtrl.pop();
                    }
                });
            }
        }
    };
    EditCompanyPage.prototype.getCurrentProjectManager = function (companyId) {
        var _this = this;
        return this.httpService.getUserByRoleCompany('Project Manager', companyId).subscribe(function (data) {
            if (data[0] === undefined) {
                _this.lacking_project_manager = true;
                _this.getUserByRoleCompany('Project Manager', null);
            }
            else {
                _this.lacking_project_manager = false;
            }
        });
    };
    EditCompanyPage.prototype.getUserByRoleCompany = function (role, companyId) {
        var _this = this;
        return this.httpService.getUserByRoleCompany(role, companyId).subscribe(function (data) {
            if (Array.isArray(data)) {
                _this.project_managers = data;
            }
            else {
                _this.project_managers = [data];
            }
        }, function () {
            _this.project_managers = [];
        });
    };
    EditCompanyPage = __decorate([
        Component({
            selector: 'edit-company',
            templateUrl: 'edit-company.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpService,
            Camera,
            LoadingController,
            ToastController])
    ], EditCompanyPage);
    return EditCompanyPage;
}());
export { EditCompanyPage };
//# sourceMappingURL=edit-company.js.map