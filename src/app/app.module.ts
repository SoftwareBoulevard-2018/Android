/**
 * imports and declarations of everything
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';


import { PopoverPage } from '../pages/about-popover/about-popover';

//software boulevard
import { SoftwareBoulevardApp } from './app.component';
import { GeneralServiceService } from './general-service.service';
import { AboutPage } from '../pages/about/about';
//Module 1 components
import { SetUpPage } from '../pages/set-up/set-up';
import { ProjectlistPage } from '../pages/set-up/projectlist/projectlist';
import { NewprojectPage } from '../pages/set-up/newproject/newproject';
import { BiddingeditorPage } from '../pages/set-up/biddingeditor/biddingeditor';
import { InstanteditorPage } from '../pages/set-up/instanteditor/instanteditor';
import { NewpuzzlePage } from '../pages/set-up/newpuzzle/newpuzzle';
import { PuzzlelistPage } from '../pages/set-up/puzzlelist/puzzlelist';
import { QuestlistPage } from '../pages/set-up/questlist/questlist';
import { UpdatequestPage } from '../pages/set-up/updatequest/updatequest';
import { OptionquestPage } from '../pages/set-up/optionquest/optionquest';
import { SelectquestPage } from '../pages/set-up/selectquest/selectquest';
import { UpdateparameterPage } from '../pages/set-up/updateparameter/updateparameter';
//Module 2 components
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { ListUsersPage } from '../pages/list-users/list-users';
import { ViewCompanyPage } from '../pages/company/company';
import { ListCompaniesPage } from '../pages/list-companies/list-companies';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { CreateCompanyPage } from '../pages/create-company/create-company';
import { EditCompanyPage } from '../pages/edit-company/edit-company';
import { ViewAccountPage } from '../pages/account/account';
import { EditAccountPage } from '../pages/edit-account/edit-account';
import { ReportsPage } from '../pages/reports/reports';
//Module 3 components
import { HireUserPage } from './../pages/hire-user/hire-user';
//Module 5 components (Email communication)
import { ComposeEmailPage } from '../pages/compose-email/compose-email';
import { InboxPage } from '../pages/inbox/inbox';
import { MenuemailpopoverPage } from '../pages/menuemailpopover/menuemailpopover';
import { ReademailPage } from '../pages/reademail/reademail';
import { SentemailpagePage } from '../pages/sentemailpage/sentemailpage';



import { DevelopProjectPage } from '../pages/develop-project/develop-project';
import { ImproveSkillLevelPage } from '../pages/improve-skill-level/improve-skill-level';
import { JoinTeamPage } from '../pages/join-team/join-team';





import { UserData } from '../providers/user-data';

import { servicesEmail } from '../providers/servicesEmail';
import { SelectProjectPage } from '../pages/select-project/select-project';
import { GenerateResourcesPage } from '../pages/generate-resources/generate-resources';
import { EstimateCostTimePage } from './../pages/estimate-cost-time/estimate-cost-time';

@NgModule({
  declarations: [
    PopoverPage,
    SoftwareBoulevardApp,
    LoginPage,
    MainPage,
    ComposeEmailPage,
    InboxPage,
    ListUsersPage,
    AboutPage,
    ListCompaniesPage,
    ViewCompanyPage,
    SetUpPage,
    ReportsPage,
    CreateAccountPage,
    CreateCompanyPage,
    EditCompanyPage,
    ViewAccountPage,
    EditAccountPage,
    MenuemailpopoverPage,
    ReademailPage,
    SentemailpagePage,
    DevelopProjectPage,
    ImproveSkillLevelPage,
    JoinTeamPage,
    ProjectlistPage,
    NewprojectPage,
    BiddingeditorPage,
    InstanteditorPage,
    HireUserPage,
    SelectProjectPage,
    GenerateResourcesPage,
    EstimateCostTimePage,
    NewpuzzlePage,
    PuzzlelistPage,
    QuestlistPage,
    UpdatequestPage,
    OptionquestPage,
    SelectquestPage,
    UpdateparameterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(SoftwareBoulevardApp, {}, {
      links: [
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: MainPage, name: 'MainPage', segment: 'main' },
        { component: InboxPage, name: 'InboxPage', segment: 'inbox' },
        { component: ComposeEmailPage, name: 'ComposeEmailPage', segment: 'compose-email' },
        { component: ListUsersPage, name: 'ListUsersPage', segment: 'users' },
        { component: AboutPage, name: 'AboutPage', segment: 'about' },
        { component: ListCompaniesPage, name: 'ListCompaniesPage', segment: 'companies' },
        { component: ViewCompanyPage, name: 'ViewCompanyPage', segment: 'companies' },
        { component: SetUpPage, name: 'SetUpPage', segment: 'set-up' },
        { component: ReportsPage, name: 'ReportsPage', segment: 'reports' },
        { component: CreateAccountPage, name: 'CreateAccountPage', segment: 'users' },
        { component: CreateCompanyPage, name: 'CreateCompanyPage', segment: 'companies' },
        { component: EditCompanyPage, name: 'EditCompanyPage', segment: 'companies' },
        { component: ViewAccountPage, name: 'AccountPage', segment: 'account' },
        { component: EditAccountPage, name: 'EditAccountPage', segment: 'account' },


        { component: DevelopProjectPage, name: 'DevelopProjectPage', segment: 'account' },
        { component: ImproveSkillLevelPage, name: 'ImproveSkillLevelPage', segment: 'account' },
        { component: JoinTeamPage, name: 'JoinTeamPage', segment: 'account' },
        { component: HireUserPage, name: 'HireUserPage', segment: 'users' },
        { component: SelectProjectPage, name: 'SelectProjectPage', segment: 'users' },
        { component: GenerateResourcesPage, name: 'GenerateResourcesPage', segment: 'users' },
        { component: EstimateCostTimePage, name: 'EstimateCostTimePage', segment: 'users' }
        
        
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PopoverPage,
    SoftwareBoulevardApp,
    LoginPage,
    MainPage,
    InboxPage,
    ComposeEmailPage,
    ListUsersPage,
    AboutPage,
    ListCompaniesPage,
    ViewCompanyPage,
    SetUpPage,
    ReportsPage,
    CreateAccountPage,
    CreateCompanyPage,
    EditCompanyPage,
    ViewAccountPage,
    EditAccountPage,
    MenuemailpopoverPage,
    ReademailPage,
    SentemailpagePage,
    DevelopProjectPage,
    ImproveSkillLevelPage,
    JoinTeamPage,
    ProjectlistPage,
    NewprojectPage,
    BiddingeditorPage,
    InstanteditorPage,
    HireUserPage,
    SelectProjectPage,
    GenerateResourcesPage,
    EstimateCostTimePage,
    NewpuzzlePage,
    PuzzlelistPage,
    QuestlistPage,
    UpdatequestPage,
    OptionquestPage,
    SelectquestPage,
    UpdateparameterPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserData,
    InAppBrowser,
    SplashScreen,
    GeneralServiceService,
    servicesEmail
  ]
})
export class AppModule { }