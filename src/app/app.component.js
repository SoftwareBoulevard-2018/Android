var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GeneralServiceService } from './general-service.service';
import { SelectProjectPage } from './../pages/select-project/select-project';
import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';
//import { ViewAccountPage } from '../pages/account/account';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { SetUpPage } from '../pages/set-up/set-up';
import { ReportsPage } from '../pages/reports/reports';
//import { ComposeEmailPage } from '../pages/compose-email/compose-email';
import { InboxPage } from '../pages/inbox/inbox';
import { DevelopProjectPage } from '../pages/develop-project/develop-project';
import { ImproveSkillLevelPage } from '../pages/improve-skill-level/improve-skill-level';
import { JoinTeamPage } from '../pages/join-team/join-team';
import { GenerateResourcesPage } from '../pages/generate-resources/generate-resources';
import { EstimateCostTimePage } from './../pages/estimate-cost-time/estimate-cost-time';
import { HireUserPage } from './../pages/hire-user/hire-user';
var SoftwareBoulevardApp = /** @class */ (function () {
    function SoftwareBoulevardApp(events, menu, platform, storage, splashScreen, service, statusBar) {
        var _this = this;
        this.events = events;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.service = service;
        this.statusBar = statusBar;
        // List of pages that can be navigated to from the left menu
        // the login page disables the left menu
        this.navigationPages = [
            { title: 'Main', name: 'MainPage', component: MainPage, icon: 'md-home' },
            { title: 'Reports', name: 'ReportsPage', component: ReportsPage, icon: 'md-podium' },
            { title: 'Email', name: 'InboxPage', component: InboxPage, icon: 'mail' }
        ];
        this.gamePages = [
            //{ title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
            { title: 'Develop project', name: 'DevelopProjectPage', component: DevelopProjectPage, icon: 'bulb' },
            { title: 'Improve skill level', name: 'ImproveSkillLevelPage', component: ImproveSkillLevelPage, icon: 'book' },
            { title: 'Join team', name: 'JoinTeamPage', component: JoinTeamPage, icon: 'body' }
        ];
        this.managementPages = [
            //{ title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
            { title: 'Select Project', name: 'SelectProjectPage', component: SelectProjectPage, icon: 'checkbox-outline' },
            { title: 'Generate Resources', name: 'GenerateResourcesPage', component: GenerateResourcesPage, icon: 'hammer' },
            { title: 'Estimate Cost and Time', name: 'EstimateCostTimePage', component: EstimateCostTimePage, icon: 'cash' },
            { title: 'Recruit team member', name: 'HireUserPage', component: HireUserPage, icon: 'person-add' }
        ];
        this.loggedInPages = [
            //{ title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
            { title: 'About', name: 'AboutPage', component: AboutPage, icon: 'help' },
            { title: 'Logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true }
        ];
        this.adminPages = [
            { title: 'Set-up', name: 'SetUpPage', component: SetUpPage, icon: 'md-cog' }
        ];
        //verificates if the user is already logged in and skips the login page
        this.service.getCurrentUser().then(function (user) {
            if (user !== undefined && user !== null) {
                _this.user_type = user.role;
                _this.rootPage = MainPage;
                _this.menu.enable(true);
            }
            else {
                _this.menu.enable(false);
                _this.rootPage = LoginPage;
            }
        });
        this.platformReady();
        this.listenToLoginEvents();
    }
    /**
     * opens a page as root page and verifies if it's a logout.
     *
     * @param page page to be opened
     */
    SoftwareBoulevardApp.prototype.openPage = function (page) {
        var params = {};
        this.nav.setRoot(page.name, params).catch(function (err) {
            console.log("Didn't set nav root: " + err);
        });
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.service.logout();
        }
    };
    /**
     * disables menu if ocurrs logout event.
     */
    SoftwareBoulevardApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.service.getCurrentUser().then(function (user) {
                _this.user_type = user.role;
            });
            _this.menu.enable(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.menu.enable(false);
        });
    };
    SoftwareBoulevardApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#00585E');
            _this.splashScreen.hide();
        });
    };
    /**
     * changes the color of the active page in the menu.
     */
    SoftwareBoulevardApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'secondary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'secondary';
        }
        return;
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], SoftwareBoulevardApp.prototype, "nav", void 0);
    SoftwareBoulevardApp = __decorate([
        Component({
            templateUrl: 'app.template.html'
        }),
        __metadata("design:paramtypes", [Events,
            MenuController,
            Platform,
            Storage,
            SplashScreen,
            GeneralServiceService,
            StatusBar])
    ], SoftwareBoulevardApp);
    return SoftwareBoulevardApp;
}());
export { SoftwareBoulevardApp };
//# sourceMappingURL=app.component.js.map