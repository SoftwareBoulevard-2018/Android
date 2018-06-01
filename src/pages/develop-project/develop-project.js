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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { DevelopingAttempt } from './../../models/developingAttempt';
var DevelopProjectPage = /** @class */ (function () {
    //Constructor
    function DevelopProjectPage(service, httpService, navCtrl, navParams, alertCtrl) {
        this.service = service;
        this.httpService = httpService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.questionspending = 0;
        this.questionnumber = 0;
        this.preg1 = new Question("Some kinds of UML diagrams are:", "Goal Diagram  <-", "Class Diagram", "Process Diagram", "State Machine Diagram", true, false, false, false);
        this.preg2 = new Question("The possible verbs used in a structural relation are:", "Is  <-", "Are", "Has  <-", "Have", true, false, true, false);
        this.preg3 = new Question("Which of these are possible states of an activity in the kanban board", "Done  <-", "Doing  <-", "Planned", "Achieved", true, true, false, false);
        //Actual code
        this.answer1temp = false;
        this.answer2temp = false;
        this.answer3temp = false;
        this.answer4temp = false;
        this.textNoHid = false;
        this.textHid = false;
        this.ans1hid = false;
        this.ans2hid = false;
        this.ans3hid = false;
        this.ans4hid = false;
        this.sendhid = false;
        this.checkForQuestions();
    }
    //It's meant to be used to check for remaining questions for the user in the server. Must be called every time the improve skill level page is opened.
    DevelopProjectPage.prototype.checkForQuestions = function () {
        if (this.questionspending == 0) {
            this.hideOptions();
        }
        else {
            this.showOptions();
        }
    };
    //Shows the questions and it's options in case there is a question available
    DevelopProjectPage.prototype.showOptions = function () {
        this.textHid = false;
        this.ans1hid = false;
        this.ans2hid = false;
        this.ans3hid = false;
        this.ans4hid = false;
        this.sendhid = false;
        this.textNoHid = true;
    };
    //Hides the questions and it's options, shows only a message. In case there is no questions available
    DevelopProjectPage.prototype.hideOptions = function () {
        this.textHid = true;
        this.ans1hid = true;
        this.ans2hid = true;
        this.ans3hid = true;
        this.ans4hid = true;
        this.sendhid = true;
        this.textNoHid = false;
    };
    //Wrong answer alert
    DevelopProjectPage.prototype.showWrongAnswer = function () {
        var alert = this.alertCtrl.create({
            title: 'Wrong answer',
            message: 'Your team lost the resources spent in this answer',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    //Correct answer alert, but there are more questions remaining
    DevelopProjectPage.prototype.showCorrectAnswer = function () {
        var alert = this.alertCtrl.create({
            title: 'Correct answer',
            message: 'You can now answer your next question',
            buttons: ['Dismiss']
        });
        this.answer1temp = false;
        this.answer2temp = false;
        this.answer3temp = false;
        this.answer4temp = false;
        alert.present();
    };
    //Correct answer alert, in the last available question
    DevelopProjectPage.prototype.showLastAnswer = function () {
        var alert = this.alertCtrl.create({
            title: 'Correct answer',
            message: 'This was your last question, your job in this project is done',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    //Alert to be used when user tries to send an answer but his team has no resources left
    DevelopProjectPage.prototype.showNoResour = function () {
        var alert = this.alertCtrl.create({
            title: 'You have no resources left',
            message: 'Please wait until your Project Manager generates more resources',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    //Function called with the SEND button, checks if the answers are correct and calls the alerts according to the result
    DevelopProjectPage.prototype.checkAnswers = function () {
        var _this = this;
        var answers = [];
        if (this.answer1temp) {
            answers.push(this.questions[this.questionnumber].option1);
        }
        if (this.answer2temp) {
            answers.push(this.questions[this.questionnumber].option2);
        }
        if (this.answer3temp) {
            answers.push(this.questions[this.questionnumber].option3);
        }
        if (this.answer4temp) {
            answers.push(this.questions[this.questionnumber].option4);
        }
        if (this.resour <= 0) {
            this.showNoResour();
        }
        else if (this.answer1temp == this.question.answers[0].veracity && this.answer2temp == this.question.answers[1].veracity && this.answer3temp == this.question.answers[2].veracity && this.answer4temp == this.question.answers[3].veracity) {
            if (this.user.role == "Analyst") {
                this.increaseAnalystQuestions();
            }
            else if (this.user.role == "Developer") {
                this.increaseDeveloperQuestions();
            }
            else {
                this.increaseTesterQuestions();
            }
            if (this.questionnumber < this.questions.length - 1) {
                this.showCorrectAnswer();
                this.questionnumber = this.questionnumber + 1;
            }
            else {
                this.showLastAnswer();
                this.hideOptions();
            }
            this.resour = this.resour - 1;
            this.sendDevelopingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
            this.increaseCorrectProjectQuestions();
            this.increaseSpentResources();
            this.decreaseResources();
        }
        else {
            this.decreaseResources();
            this.increaseSpentResources();
            this.sendDevelopingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
            this.showWrongAnswer();
            this.resour = this.resour - 1;
        }
        setTimeout(function () {
            _this.updateUser();
            _this.updateCompany();
            console.log("User and company have been updated");
        }, 2000);
    };
    //Slide down refresher, works for the first deliverable demo's purpose, must be updated when theres connection to the server
    DevelopProjectPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.answer1temp = false;
        this.answer2temp = false;
        this.answer3temp = false;
        this.answer4temp = false;
        this.questionnumber = 0;
        this.questionspending = 3;
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
            _this.checkForQuestions();
        }, 2000);
    };
    DevelopProjectPage.prototype.updateUser = function () {
        this.httpService.updateUser(this.user, this.user.id).subscribe(function (data) { console.log(data); }, function (error) { console.log(error); });
        return this.user;
    };
    DevelopProjectPage.prototype.updateCompany = function () {
        this.httpService.updateCompany(this.company, this.company.id).subscribe(function (data) { console.log(data); }, function (error) { console.log(error); });
        return this.company;
    };
    DevelopProjectPage.prototype.sendDevelopingAttempt = function (state, question, answer, user) {
        var ta = new DevelopingAttempt(0, state, question, answer, user);
        this.httpService.createDevelopingAttempt(ta).subscribe(function (data) { console.log(data); }, function (error) { console.log(error); });
    };
    DevelopProjectPage.prototype.decreaseResources = function () {
        this.company.companyResource = this.company.companyResource - 1;
        return this.user;
    };
    DevelopProjectPage.prototype.increaseSpentResources = function () {
        this.user.resourcesSpent = this.user.resourcesSpent + 1;
        return this.user;
    };
    DevelopProjectPage.prototype.increaseCorrectProjectQuestions = function () {
        this.user.correctProjectQuestions = this.user.correctProjectQuestions + 1;
        return this.user;
    };
    DevelopProjectPage.prototype.increaseAnalystQuestions = function () {
        this.company.numberOfCorrectDevelopingAttempsByAnalyst = this.company.numberOfCorrectDevelopingAttempsByAnalyst + 1;
        return this.company;
    };
    DevelopProjectPage.prototype.increaseDeveloperQuestions = function () {
        this.company.numberOfCorrectDevelopingAttempsByDeveloper = this.company.numberOfCorrectDevelopingAttempsByDeveloper + 1;
        return this.company;
    };
    DevelopProjectPage.prototype.increaseTesterQuestions = function () {
        this.company.numberOfCorrectDevelopingAttempsByTester = this.company.numberOfCorrectDevelopingAttempsByTester + 1;
        return this.company;
    };
    DevelopProjectPage.prototype.setResources = function (resources) {
        this.resour = resources;
    };
    DevelopProjectPage.prototype.setMembers = function (members) {
        this.mem = members;
    };
    DevelopProjectPage.prototype.setQuestionNumber = function (q_number) {
        this.questionnumber = q_number;
    };
    DevelopProjectPage.prototype.setUser = function (user) {
        this.user = user;
        return user;
    };
    DevelopProjectPage.prototype.setCompany = function (company) {
        this.company = company;
        return company;
    };
    DevelopProjectPage.prototype.setProject = function (project) {
        this.project = project;
        return project;
    };
    DevelopProjectPage.prototype.setAssignment = function (assignment) {
        this.assignment = assignment;
        return assignment;
    };
    DevelopProjectPage.prototype.setQuestions = function (questions) {
        this.questions = questions;
        return questions;
    };
    DevelopProjectPage.prototype.setQuestion = function (question) {
        this.question = question;
        this.qd = question.description;
        this.a1 = question.answers[0].description;
        this.a2 = question.answers[1].description;
        this.a3 = question.answers[2].description;
        this.a4 = question.answers[3].description;
        console.log("Description: " + question.description);
    };
    DevelopProjectPage.prototype.printQuestions = function () {
        console.log(this.a_questions);
    };
    DevelopProjectPage.prototype.getQuestions = function (assignments, user) {
        var _this = this;
        setTimeout(function () {
            console.log(_this.a_questions);
            if (!_this.checkAvailability()) {
                console.log(_this.checkAvailability());
                _this.hideOptions();
            }
            else {
                _this.showOptions();
                //this.setQuestion();
            }
            //this.questionnumber = 1;                
        }, 1000);
        for (var j = 0; j < assignments.length; ++j) {
            this.httpService.getQuestionsById(assignments[j].questionId).subscribe(function (question) {
                if (question.role == user.role) {
                    //this.questions.push(question);
                    _this.qid;
                    _this.qd = question.description;
                    _this.a1 = question.answers[0].description;
                    _this.a2 = question.answers[1].description;
                    _this.a3 = question.answers[2].description;
                    _this.a4 = question.answers[3].description;
                    console.log("Description: " + question.description);
                }
            }, function (error) {
                _this.hideOptions();
                console.log(error);
            });
        }
        //this.a_questions.pop();
    };
    DevelopProjectPage.prototype.checkAvailability = function () {
        console.log("Project: " + this.project);
        if (this.user.role == "Analyst") {
            this.questionnumber = this.company.numberOfCorrectDevelopingAttempsByAnalyst;
            return true;
        }
        else if (this.user.role == "Developer" &&
            this.project.numberOfDevelopingQuestionsPerAnalyst <= this.company.numberOfCorrectDevelopingAttempsByAnalyst) {
            this.questionnumber = this.company.numberOfCorrectDevelopingAttempsByDeveloper;
            return true;
        }
        else if (this.project.numberOfDevelopingQuestionsPerAnalyst <= this.company.numberOfCorrectDevelopingAttempsByAnalyst &&
            this.project.numberOfDevelopingQuestionsPerDeveloper <= this.company.numberOfCorrectDevelopingAttempsByDeveloper) {
            this.questionnumber = this.company.numberOfCorrectDevelopingAttempsByTester;
            return true;
        }
        return false;
    };
    //Confirms the screen loaded (?) auto-generated code
    DevelopProjectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getCurrentUser().then(function (user) {
            _this.user = user;
            console.log(user);
            _this.httpService.getCompanyById(user.companyId).subscribe(function (company) {
                _this.setCompany(company);
                _this.setResources(company.companyResource);
                _this.httpService.getUsersByCompany(company.id).subscribe(function (users) {
                    _this.setMembers(users.length);
                });
                console.log(company);
                _this.httpService.getRecordsByCompany(company.id).subscribe(function (records) {
                    console.log(records);
                    for (var i = 0; i < records.length; ++i) {
                        if (records[i].finishDate == undefined) {
                            _this.httpService.getInstantProjectById(records[i].project).subscribe(function (project) {
                                _this.setProject(project);
                                console.log(project);
                            });
                            _this.httpService.getAssignmentById(records[i].project).subscribe(function (assignments) {
                                setTimeout(function () {
                                    if (!_this.checkAvailability()) {
                                        _this.hideOptions();
                                    }
                                    else {
                                        var questions = [];
                                        for (var i = 0; i < assignments.length; ++i) {
                                            _this.httpService.getQuestionsById(assignments[_this.questionnumber].questionId).subscribe(function (question) {
                                                if (question.role == _this.user.role) {
                                                    questions.push(question);
                                                }
                                            });
                                        }
                                        _this.question = questions[_this.questionnumber];
                                        setTimeout(function () {
                                            _this.q = _this.question.description;
                                            _this.a1 = _this.question.answers[0].description;
                                            _this.a2 = _this.question.answers[1].description;
                                            _this.a3 = _this.question.answers[2].description;
                                            _this.a4 = _this.question.answers[3].description;
                                            _this.showOptions();
                                        }, 5000);
                                        /*
                                        this.httpService.getQuestionsById(assignments[this.questionnumber].questionId).subscribe((question) => {
                                          this.setQuestion(question);
                                        });
                                        */
                                        //this.setQuestion();
                                    }
                                    //this.questionnumber = 1;                
                                }, 1000);
                                /*
                                console.log(assignments);
                                setTimeout(() => {
                                  this.getQuestions(assignments, user);
                                }, 2000);
                                */
                                //console.log("Availability: " + this.checkAvailability());
                            }, function (error) {
                                _this.hideOptions();
                                console.log(error);
                            });
                        }
                    }
                }, function (error) {
                    _this.hideOptions();
                    console.log(error);
                });
            }, function (error) {
                _this.hideOptions();
                console.log(error);
            });
        });
        console.log('ionViewDidLoad DevelopProjectPage');
    };
    DevelopProjectPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-develop-project',
            templateUrl: 'develop-project.html',
        }),
        __metadata("design:paramtypes", [GeneralServiceService, HttpService, NavController, NavParams, AlertController])
    ], DevelopProjectPage);
    return DevelopProjectPage;
}());
export { DevelopProjectPage };
//Object QUESTION
var Question = /** @class */ (function () {
    function Question(qtext, option1, option2, option3, option4, answer1, answer2, answer3, answer4) {
        this.qtext = qtext;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
    }
    return Question;
}());
//# sourceMappingURL=develop-project.js.map