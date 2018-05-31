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
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Company } from '../../models/company';
import { HttpService } from '../../app/http.service';
/**
 * shows and validates a form used to create a new company
 * includes the optional uploading of a image
 */
var CreateCompanyPage = /** @class */ (function () {
    function CreateCompanyPage(navCtrl, httpService, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.company = new Company();
        this.submitted = false;
    }
    CreateCompanyPage.prototype.ionViewWillEnter = function () {
        //search for available project managers
        this.getUserByRoleCompany('Project Manager', null);
    };
    CreateCompanyPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    CreateCompanyPage.prototype.uploadImage = function () {
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
    CreateCompanyPage.prototype.presentToast = function (msg) {
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
    CreateCompanyPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.uploadImage().then(function () {
                _this.httpService.createCompany(_this.company).subscribe(function (company) {
                    return _this.httpService.updateUser({ companyId: company.id }, _this.project_manager).subscribe(function () {
                        _this.navCtrl.pop();
                    });
                });
            });
        }
    };
    CreateCompanyPage.prototype.getUserByRoleCompany = function (role, companyId) {
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
    CreateCompanyPage = __decorate([
        Component({
            selector: 'create-company',
            templateUrl: 'create-company.html'
        }),
        __metadata("design:paramtypes", [NavController,
            HttpService,
            Camera,
            LoadingController,
            ToastController])
    ], CreateCompanyPage);
    return CreateCompanyPage;
}());
export { CreateCompanyPage };
//# sourceMappingURL=create-company.js.map