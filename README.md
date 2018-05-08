# Software Boulevard

This is the ionic version of the software engineering learning game created with DSD.


## Table of Contents
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)
 - [Components by Module](#components-by-module)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/SoftwareBoulevard-2018/Android.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.

_Note: You may need to add “sudo” in front of any global commands to install the utilities._

## Deploying

* PWA - Un-comment [this](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`

## File Structure of App

```
Android/
|
|-- resources/
|
|-- src/
|    |-- app/
|    |    ├── app.component.ts            *first component of software boulevard
|    |    └── app.module.ts               *all components are imported and declared here
|    |    └── app.template.html           *contains the left menu
|    |    └── main.ts
|    |
|    |-- assets/
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    |-- pages/                                 * Contains all of our pages
│    │    ├── about/                            * About page
│    │    │    ├── about.html                   * AboutPage template
│    │    │    └── about.ts                     * AboutPage code
│    │    │    └── about.scss                   * AboutPage stylesheet
│    │    │
│    │    ├── account/                          * Account page
│    │    │    ├── account.html                 * AccountPage template
│    │    │    └── account.ts                   * AccountPage code
│    │    │    └── account.scss                 * AccountPage stylesheet
│    │    │
│    │    ├── compose-email/                    * Compose email page
│    │    │    ├── compose-email.html           * ComposeEmailPage template
│    │    │    └── compose-email.ts             * ComposeEmailPage code
│    │    │    └── compose-email.scss           * ComposeEmailPage stylesheet
│    │    │
│    │    ├── develop-project/                  * Develop project page
│    │    │    ├── develop-project.html         * Develop project template
│    │    │    └── develop-project.ts           * Develop project code
│    │    │    └── develop-project.scss         * Develop project stylesheet
│    │    │
│    │    ├── improve-skill-level/              * Improve skill level page
│    │    │    ├── improve-skill-level.html     * Improve skill level template
│    │    │    └── improve-skill-level.ts       * Improve skill level code
│    │    │    └── improve-skill-level.scss     * Improve skill level stylesheet
│    │    │
│    │    ├── inbox/                            * Inbox page
│    │    │    ├── inbox.html                   * InboxPage template
│    │    │    └── inbox.ts                     * InboxPage code
│    │    │    └── inbox.scss                   * InboxPage stylesheet
│    │    │
│    │    ├── join-team/                        * Join team page
│    │    │    ├── join-team.html               * Join team template
│    │    │    └── join-team.ts                 * Join team code
│    │    │    └── join-team.scss               * Join team stylesheet
│    │    │
│    │    │── login/                            * Login page
│    │    │    ├── login.html                   * LoginPage template
│    │    │    └── login.ts                     * LoginPage code
│    │    │    └── login.scss                   * LoginPage stylesheet
│    │    │
│    │    │── main/                             * Main page
│    │    │    ├── main.html                    * MainPage template
│    │    │    └── main.ts                      * MainPage code
│    │    │    └── main.scss                    * MainPage stylesheet
│    │    │
│    │    │── menuemailpopover/                 * Menu Email Popover
│    │    │    ├── menuemailpopover.html        * MenuemailPopover template
│    │    │    └── menuemailpopover.ts          * MenuemailPopover code
│    │    │    └── menuemailpopover.scss        * MenuemailPopover stylesheet
│    │    │
│    │    │── reademail/                        * Read Email Page
│    │    │    ├── reademail.html               * ReadEmail template
│    │    │    └── reademail.ts                 * ReadEmail code
│    │    │    └── reademail.scss               * ReadEmail stylesheet
│    │    │
│    │    │── sentemailpage/                    * Sent Email Page
│    │    │    ├── sentemailpage.html           * SentemailPage template
│    │    │    └── sentemailpage.ts             * SentemailPage code
│    │    │    └── sentemailpage.scss           * SentemailPage stylesheet
│    │    │
│    │    │── signup/                           * Signup page
│    │    |    ├── signup.html                  * SignupPage template
│    │    |    └── signup.ts                    * SignupPage code
|    |    |  
|    |    |── home/                             * Home page
|    |    |    ├── home.html                    * Home page template
|    |    |    └── home.scss                    * Home page stylesheet
|    |    |    └── home.ts                      * Home page code
|    |    |
|    |    |── biddingeditor/                    * Biddingeditor page
|    |    |    ├─── biddingeditor.html          * Biddingeditor page template
|    |    |    └── biddingeditor.scss           * Biddingeditor page stylesheet
|    |    |    └── biddingeditor.ts             * Biddingeditor page code
|    |    |
|    |    |── instanteditor/                    * instanteditor page
|    |    |    ├── instanteditor.html           * instanteditor page template
|    |    |    └── instanteditor.scss           * instanteditor page stylesheet
|    |    |    └── instanteditor.ts             * instanteditor page code
|    |    |
|    |    |── newproject/                       * newproject page
|    |    |    ├── newproject.html               * newproject page template
|    |    |    └── newproject.scss              * newproject page stylesheet
|    |    |    └── newproject.ts                * newproject page code
|    |    |
|    |    |── newpuzzle/                        * newpuzzle page
|    |    |    ├── newpuzzle.html                * newpuzzle page template
|    |    |    └── newpuzzle.scss               * newpuzzle page stylesheet
|    |    |    └── newpuzzle.ts                 * newpuzzle page code
|    |    |
|    |    |── optionquest/                      * optionquest page
|    |    |    ├── optionquest.html             * optionquestlate page templae
|    |    |    └── optionquest.scss             * optionquestesheet page stylesheet
|    |    |    └── optionquest.ts               * optionquest page code
|    |    |
|    |    |── projectlist/                      * projectlist page
|    |    |    ├── projectlist.html             * projectlist page template
|    |    |    └── projectlist.scss             * projectlist page stylesheet
|    |    |    └── projectlist.ts               * projectlist page code
|    |    |
|    |    |── puzzlelist/                       * puzzlelist page
|    |    |    ├── puzzlelist.html              * puzzlelist page template
|    |    |    └── puzzlelist.scss              * puzzlelist page stylesheet
|    |    |    └── puzzlelist.ts                * puzzlelist page code
|    |    |
|    |    |── questlist/                        * questlist page
|    |    |    ├── questlist.html               * questlist page template
|    |    |    └── questlist.scss               * questlist page stylesheet
|    |    |    └── questlist.ts                 * questlist page code
|    |    |
|    |    |── selectquest/                      * selectquest page
|    |    |    ├── selectquest.html             * selectquest page template
|    |    |    └── selectquest.scss             * selectquest page stylesheet
|    |    |    └── selectquest.ts               * selectquest page code
|    |    |
|    |    |── updatequest/                      * updatequest page
|    |    |    ├── updatequest.html             * updatequest page template
|    |    |    └── updatequest.scss             * updatequest page stylesheet
|    |    |    └── updatequest.ts               * updatequest page code
|    |    
│    ├── providers/                             * Contains all Injectables
│    │     ├── conference-data.ts               * ConferenceData code
│    │     └── user-data.ts                     * UserData code
│    ├── theme/                                 * App theme files
|    |     ├── variables.scss                   * App Shared Sass Variables
|    |
|    |-- index.html
|
|-- www/
|    ├── assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    └── build/
|    └── index.html
|
├── .editorconfig                               * Defines coding styles between editors
├── .gitignore                                  * Example git ignore file
├── LICENSE                                     * Apache License
├── README.md                                   * This file
├── config.xml                                  * Cordova configuration file
├── ionic.config.json                           * Ionic configuration file
├── package.json                                * Defines our JavaScript dependencies
├── tsconfig.json                               * Defines the root files and the compiler options
├── tslint.json                                 * Defines the rules for the TypeScript linter
```

## Components by Module

### Module 1
  * BiddingeditorPage
  * HomePage
  * InstanteditoPage
  * NewprojectPage
  * NewpuzzlePage
  * OptionquestPage
  * ProjectlistPage
  * PuzzlelistPage
  * QuestlistPage
  * SelectquestPage
  * UpdatequestPage
  
### Module 2
  * LoginPage
  * MainPage
  * ListUsersPage
  * ViewCompanyPage
  * ListCompaniesPage
  * CreateAccountPage
  * CreateCompanyPage
  * EditCompanyPage
  * ViewAccountPage
  * EditAccountPage
  * ReportsPag
  
### Module 3
  * HireUserPage 
  * SelectProjectPage
  * EstimateCostTimePage
  * SelectProjectPAge

### Module 4
  * MainPage (Profile): The main component allows the user to see his profile including his stats and data.
  * DevelopProjectPage: The develop project component allows the user to know if he has pending questions and if his team has enough resources for him to answer those questions, if so he can answer the questions in the same component.
  * ImproveSkillLevelPage: The improve skill level component allow the user to answer training questions in order to improve his competency level, the user is only available to answer a question if he has enough resources.
  * JoinTeamPage: The join team component allows the user to see if he has a pending invitation sent by an enterprise, if so he is able to accept or reject such invitation.

### Module 5
  * ComposeEmailPage: This component allows user to write an email. The user writes some information that includes the content, subject     and according to user role (administrator, project manager,  the system shows of recipients (user) to send a email and  that feature     will be implemented in the next deliverable  with the backend code and the database.
    This component includes 3 bottons, one of the bottoms is used to send the email and the another one is used to go back in the app.
  
  * InboxPage: This component allows to user that is logged in the app to see what emails that he has received. Each email shows data       about the sender, subject and date and if you click one of the emails you can see the content in the component of ReademailPage.
    Also in this component you can do searchs of emails filtering with subject or sender.

    Each email has a checkbox in order to see what emails of the inbox had been read.
  
    If you click SEE FULL INBOX you can see all the list of emails, it can be useful when you do a search and you need to refresh again     all the emails received also this component has a botton of options of the menu that is on the MenuemailpopverPage.

  * MenuemailpopverPage: This component is used to display a menu with the options of New Email, Inbox and Sent. 

  * ReademailPage: This component is used to display information about the email that includes the subject, content and the sender           (From).
  
  * SentemailPage:   In this component a user that is logged can see the emails that he has sent to other users. Each email shows data       about the subject and the sender that is the same of the user that is logged and if you click one of the emails you can see the         content in the component of ReademailPage.
  
    If you click SEE FULL OUTBOX you can see all the list of emails, it can be useful when you do a search and you need to refresh again     all the emails sent also this component has a botton of options of the menu that is on the MenuemailpopverPage.


## Providers by Module

### Module 5
  * servicesEmail: This service saves tests cases for emails that are in relation with the login of a user.
