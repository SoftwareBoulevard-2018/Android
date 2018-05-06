import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { SoftwareBoulevardApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';

import { SignupPage } from '../pages/signup/signup';


//software boulevard
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { ListUsersPage } from '../pages/list-users/list-users';
import { viewCompanyPage } from '../pages/company/company';
import { ListCompaniesPage } from '../pages/list-companies/list-companies';
import { SetUpPage } from '../pages/set-up/set-up';
import { ReportsPage } from '../pages/reports/reports';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    SoftwareBoulevardApp,
    AccountPage,
    PopoverPage,
    SignupPage,

    LoginPage,
    MainPage,
    ListUsersPage,
    AboutPage,
    ListCompaniesPage,
    viewCompanyPage,
    SetUpPage,
    ReportsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(SoftwareBoulevardApp, {}, {
      links: [
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        //software boulevard

        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: MainPage, name: 'MainPage', segment: 'main' },
        { component: ListUsersPage, name: 'ListUsersPage', segment: 'users' },
        { component: AboutPage, name: 'AboutPage', segment: 'about' },
        { component: ListCompaniesPage, name: 'ListCompaniesPage', segment: 'companies' },
        { component: viewCompanyPage, name: 'viewCompanyPage', segment: 'companies' },
        { component: SetUpPage, name: 'SetUpPage', segment: 'set-up' },
        { component: ReportsPage, name: 'ReportsPage', segment: 'reports' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SoftwareBoulevardApp,
    AccountPage,
    PopoverPage,
    SignupPage,

    LoginPage,
    MainPage,
    ListUsersPage,
    AboutPage,
    ListCompaniesPage,
    viewCompanyPage,
    SetUpPage,
    ReportsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
