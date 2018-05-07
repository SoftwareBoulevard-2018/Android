import { SelectProjectPage } from './../pages/select-project/select-project';
import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

//import { ViewAccountPage } from '../pages/account/account';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { SetUpPage } from '../pages/set-up/set-up';
import { ReportsPage } from '../pages/reports/reports';
//import { ComposeEmailPage } from '../pages/compose-email/compose-email';
import { InboxPage } from '../pages/inbox/inbox';

import { UserData } from '../providers/user-data';


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
  loggedInPages: PageInterface[] = [
    //{ title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'About', name: 'AboutPage', component: AboutPage, icon: 'help' },
    { title: 'Logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true },
    { title: 'SelectProjectPage', name: 'SelectProjectPage', component: SelectProjectPage, icon: 'help'},
    
  ];
  adminPages: PageInterface[] = [
    { title: 'Set-up', name: 'SetUpPage', component: SetUpPage, icon: 'md-cog' }
  ];
  rootPage: any;
  user_type: string;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen
  ) {
    //verificates if the user is already logged in and skips the login page    
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      if(hasLoggedIn===true){
        this.rootPage = MainPage;
        this.menu.enable(true);
      }else{
        this.menu.enable(false);
        this.rootPage = LoginPage;
      }
    });
    this.userData.getRole().then(role =>{
      this.user_type = role;
      console.log("promise ut: "+this.user_type);
    })
    console.log("constructor ut: "+this.user_type);

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
      this.userData.logout();
    }
  }

  /**
   * disables menu if ocurrs logout event.
   */
  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.userData.getRole().then(role =>{
        this.user_type = role;
        console.log("ionopen ut: "+this.user_type);
      })
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
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
