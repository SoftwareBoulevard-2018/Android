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
|    |-- pages/                          * Contains all of our pages here is some of them
│    │    ├── about/                     * About page
│    │    │    ├── about.html            * AboutPage template
│    │    │    └── about.ts              * AboutPage code
│    │    │    └── about.scss            * AboutPage stylesheet
│    │    │
│    │    ├── account/                   * Account page
│    │    │    ├── account.html          * AccountPage template
│    │    │    └── account.ts            * AccountPage code
│    │    │    └── account.scss          * AccountPage stylesheet
│    │    │
│    │    ├── compose-email/             * Compose email page
│    │    │    ├── compose-email.html    * ComposeEmailPage template
│    │    │    └── compose-email.ts      * ComposeEmailPage code
│    │    │    └── compose-email.scss    * ComposeEmailPage stylesheet
│    │    │
│    │    ├── inbox/                     * Inbox page
│    │    │    ├── inbox.html            * InboxPage template
│    │    │    └── inbox.ts              * InboxPage code
│    │    │    └── inbox.scss            * InboxPage stylesheet
│    │    │
│    │    │── login/                     * Login page
│    │    │    ├── login.html            * LoginPage template
│    │    │    └── login.ts              * LoginPage code
│    │    │    └── login.scss            * LoginPage stylesheet
│    │    │
│    │    │── main/                      * Main page
│    │    │    ├── main.html             * MainPage template
│    │    │    └── main.ts               * MainPage code
│    │    │    └── main.scss             * MainPage stylesheet
│    │    │
│    │    │── menuemailpopover/             * Menu Email Popover
│    │    │    ├── menuemailpopover.html    * MenuemailPopover template
│    │    │    └── menuemailpopover.ts      * MenuemailPopover code
│    │    │    └── menuemailpopover.scss    * MenuemailPopover stylesheet
│    │    │
│    │    │── reademail/                 * Read Email Page
│    │    │    ├── reademail.html        * ReadEmail template
│    │    │    └── reademail.ts          * ReadEmail code
│    │    │    └── reademail.scss        * ReadEmail stylesheet
│    │    │
│    │    │── sentemailpage/             * Sent Email Page
│    │    │    ├── sentemailpage.html    * SentemailPage template
│    │    │    └── sentemailpage.ts      * SentemailPage code
│    │    │    └── sentemailpage.scss    * SentemailPage stylesheet
│    │    │
│    │    │── signup/                    * Signup page
│    │         ├── signup.html           * SignupPage template
│    │         └── signup.ts             * SignupPage code
|    |
│    ├── providers/                      * Contains all Injectables
│    │     ├── user-data.ts              * UserData code
│    │     └── servicesEmail.ts          * servicesEmail code
│    ├── theme/                          * App theme files
|    |     ├── variables.scss            * App Shared Sass Variables
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
├── .editorconfig                       * Defines coding styles between editors
├── .gitignore                          * Example git ignore file
├── README.md                           * This file
├── config.xml                          * Cordova configuration file
├── ionic.config.json                   * Ionic configuration file
├── package.json                        * Defines our JavaScript dependencies
├── tsconfig.json                       * Defines the root files and the compiler options
├── tslint.json                         * Defines the rules for the TypeScript linter
```

## Components by Module

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
