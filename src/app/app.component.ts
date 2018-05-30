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

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}
@Component({
  templateUrl: 'app.template.html'
})
export class SoftwareBoulevardApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the login page disables the left menu
  navigationPages: PageInterface[] = [
    { title: 'Main', name: 'MainPage', component: MainPage, icon: 'md-home' },
    { title: 'Reports', name: 'ReportsPage', component: ReportsPage, icon: 'md-podium' },
    { title: 'Email', name: 'InboxPage', component: InboxPage, icon: 'mail' }
  ];



  gamePages: PageInterface[] = [
    //{ title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Develop project', name: 'DevelopProjectPage', component: DevelopProjectPage, icon: 'bulb' },
    { title: 'Improve skill level', name: 'ImproveSkillLevelPage', component: ImproveSkillLevelPage, icon: 'book' },
    { title: 'Join team', name: 'JoinTeamPage', component: JoinTeamPage, icon: 'body' }
  ];

  managementPages: PageInterface[] = [
    //{ title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Select Project', name: 'SelectProjectPage', component: SelectProjectPage, icon: 'checkbox-outline'},
    { title: 'Generate Resources', name: 'GenerateResourcesPage', component: GenerateResourcesPage, icon: 'hammer'},
    { title: 'Estimate Cost and Time', name: 'EstimateCostTimePage', component: EstimateCostTimePage, icon: 'cash'},
    { title: 'Recruit team member', name: 'HireUserPage', component: HireUserPage, icon: 'person-add'}
  ];

  loggedInPages: PageInterface[] = [
    //{ title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'About', name: 'AboutPage', component: AboutPage, icon: 'help' },
    { title: 'Logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true }
  ];

  adminPages: PageInterface[] = [
    { title: 'Set-up', name: 'SetUpPage', component: SetUpPage, icon: 'md-cog' }
  ];
  rootPage: any;
  user_type: string;

  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen,
    public service: GeneralServiceService,
    private statusBar: StatusBar
  ) {
    this.statusBar.backgroundColorByHexString('#00585E');
    
    //verificates if the user is already logged in and skips the login page
    this.service.getCurrentUser().then((user) => {
      if(user !== undefined && user !== null){
        this.user_type = user.role;
        this.rootPage = MainPage;
        this.menu.enable(true);
      }else{
        this.menu.enable(false);
        this.rootPage = LoginPage;
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
  openPage(page: PageInterface) {
    let params = {};

      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });


    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.service.logout();
    }
  }

  /**
   * disables menu if ocurrs logout event.
   */
  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.service.getCurrentUser().then((user) => {
        this.user_type = user.role;
      });
      this.menu.enable(true);
    });

    this.events.subscribe('user:logout', () => {
      this.menu.enable(false);
    });
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  /**
   * changes the color of the active page in the menu.
   */
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

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
  }
}
