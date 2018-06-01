var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { InstantProject } from '../models/instantProject';
import { Injectable } from '@angular/core';
//import { TrainingAttempt } from '../models/TrainingAttempt';
//import { Company } from '../models/company';
//import { BiddingProject } from '../models/biddingProject';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { HttpService } from './http.service';
/**
 * contains session related functions
 */
var GeneralServiceService = /** @class */ (function () {
    function GeneralServiceService(storage, events, httpService) {
        this.storage = storage;
        this.events = events;
        this.httpService = httpService;
    }
    GeneralServiceService.prototype.logout = function () {
        this.storage.remove('userInSession');
        this.events.publish('user:logout');
    };
    /**
     * saves a session with the newly logged user
     * @param user
     */
    GeneralServiceService.prototype.login = function (user) {
        var _this = this;
        return this.storage.set('userInSession', user).then(function () {
            _this.events.publish('user:login');
        });
    };
    /**
     * returns a promise with a instance of the user currently logged in the app
     */
    GeneralServiceService.prototype.getCurrentUser = function () {
        return this.storage.get('userInSession').then(function (user) {
            return user;
        });
    };
    GeneralServiceService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, Events, HttpService])
    ], GeneralServiceService);
    return GeneralServiceService;
}());
export { GeneralServiceService };
//# sourceMappingURL=general-service.service.js.map