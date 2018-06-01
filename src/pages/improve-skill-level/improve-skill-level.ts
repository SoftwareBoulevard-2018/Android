import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
//import { Assignment } from './../../models/assignment';
import { User } from './../../models/user';
import { Company } from './../../models/company';
import { InstantProject } from './../../models/instantProject';
import { Questions } from './../../models/questions';
import { TrainingAttempt } from './../../models/trainingAttempt';

/**
 * Generated class for the ImproveSkillLevelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-improve-skill-level',
  templateUrl: 'improve-skill-level.html',
})
export class ImproveSkillLevelPage {
  user: User;
  company: Company;
  analyst: number;
  developer: number;
  tester: number;
  project: InstantProject;
  question: Questions;

  resour: number;
  mem: number;
  error: string;
  left: number = 0;

  questionnumber: number = 0;

  qid: string;
  qd: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;

  //Actual code
  answer1temp: boolean = false;
  answer2temp: boolean = false;
  answer3temp: boolean = false;
  answer4temp: boolean = false;

  textNoHid: boolean = true;
  textHid: boolean = false;
  ans1hid: boolean = false;
  ans2hid: boolean = false;
  ans3hid: boolean = false;
  ans4hid: boolean = false;
  sendhid: boolean = false;

  //Constructor
  constructor(public service: GeneralServiceService, public httpService: HttpService, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
  }

  //Shows the questions and it's options in case there is a question available
  showOptions(){
    this.textHid = false;
    this.ans1hid = false;
    this.ans2hid = false;
    this.ans3hid = false;
    this.ans4hid = false;
    this.sendhid = false;
    this.textNoHid = true;
  }
  //Hides the questions and it's options, shows only a message. In case there is no questions available
  hideOptions(){
    this.textHid = true;
    this.ans1hid = true;
    this.ans2hid = true;
    this.ans3hid = true;
    this.ans4hid = true;
    this.sendhid = true;
    this.textNoHid = false;
  }

  //Wrong answer alert
  showWrongAnswer() {
    let alert = this.alertCtrl.create({
      title: 'Wrong answer',
      message: 'Your team lost the resources spent in this answer',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  //Correct answer alert, but there are more questions remaining
  showCorrectAnswer() {
    let alert = this.alertCtrl.create({
      title: 'Correct answer',
      message: 'You can now answer your next question',
      buttons: ['Dismiss']
    });
    this.answer1temp = false;
    this.answer2temp = false;
    this.answer3temp = false;
    this.answer4temp = false;
    alert.present();
  }
  //Correct answer alert, in the last available question
  showLastAnswer() {
    let alert = this.alertCtrl.create({
      title: 'Correct answer',
      message: 'Congratulations! This was your last question, you have just leveled up',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  //Alert to be used when user tries to send an answer but his team has no resources left
  showNoResour() {
    let alert = this.alertCtrl.create({
      title: 'You have no resources left',
      message: 'Please wait until your Project Manager generates more resources',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  checkAnswers(){

    var next_question = false;

    if(this.resour <= 0){

      this.showNoResour();

    }else if(this.answer1temp == this.question.answers[0].veracity && this.answer2temp == this.question.answers[1].veracity && this.answer3temp == this.question.answers[2].veracity && this.answer4temp == this.question.answers[3].veracity){

      var suma: number = 0;

      this.service.getCurrentUser().then((user_s) => {
        this.httpService.getUserById(user_s.id).subscribe((user) => {
          this.httpService.getCertifications().subscribe((certifications) => {
            for (var i = 0; i < certifications.length; ++i) {
              if (suma + certifications[i].questions.length > user.correctTrainingQuestions) {
                suma = suma + certifications[i].questions.length;

                if (suma == user.correctTrainingQuestions + 1) {
                  this.showLastAnswer();
                  this.hideOptions();
                  this.increaseCompetencyLevel();
                }else{
                  this.showCorrectAnswer();
                  next_question = true;
                }
                break;
              }
              suma = suma + certifications[i].questions.length;
              console.log("Suma" + suma);
            }
          });  
        });
      })

      this.questionnumber = this.questionnumber + 1;
      this.resour = this.resour - 1;
      //this.sendDevelopingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
      this.increaseCorrectTrainingQuestions();
      this.increaseSpentResources();
      this.decreaseResources();

    }else{

      this.decreaseResources();
      this.increaseSpentResources();
      //this.sendDevelopingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
      this.showWrongAnswer();
      this.resour = this.resour-1;
    }

    setTimeout(() => {
      this.updateUserAndCompany(next_question);
    }, 500);
  }

  //Slide down refresher, works for the first deliverable demo's purpose, must be updated when theres connection to the server
  doRefresh(refresher) {

    setTimeout(() => {
      refresher.complete();
      this.work()
    }, 2000);
    
  }

  updateUserAndCompany(next_question){
    this.httpService.updateUser(this.user, this.user.id).subscribe(() => {
      this.httpService.updateCompany(this.company, this.company.id).subscribe(() => {
        if (next_question) {
          this.work();
        }
      }, (error) => {console.log(error)});
    }, (error) => {console.log(error)});
    return this.user;
  }

  updateUser(){
    this.httpService.updateUser(this.user, this.user.id).subscribe((data) => {console.log(data)}, (error) => {console.log(error)});
    return this.user;
  }

  updateCompany(){
    this.httpService.updateCompany(this.company, this.company.id).subscribe((data) => {console.log(data)}, (error) => {console.log(error)});
    return this.company;
  }

  sendTrainingAttempt(state, question, answer, user){
    var ta = new TrainingAttempt(0, state, question, answer, user);
    setTimeout(() => {
      this.httpService.createTrainingAttempt(ta).subscribe((data) => {console.log(data)}, (error) => {console.log(error)});
      console.log("Yay");
    }, 2000);
  }

  decreaseResources(){
    this.company.companyResource = this.company.companyResource - 1;
    return this.user;
  }

  increaseSpentResources(){
    this.user.resourcesSpent = this.user.resourcesSpent + 1;
    return this.user;
  }

  increaseCompetencyLevel(){
    this.user.competencyLevel = this.user.competencyLevel + 1;
    return this.user;
  }

  increaseCorrectTrainingQuestions(){
    this.user.correctTrainingQuestions = this.user.correctTrainingQuestions + 1;
    return this.user;
  }

  setResources(resources){
    this.resour = resources;
  }

  setMembers(members){
    this.mem = members;
  }

  setQuestionNumber(q_number){
    this.questionnumber = q_number;
  }

  setUser(user){
    this.user = user;
    return user;
  }

  setCompany(company){
    this.company = company;
    return company;
  }

  setProject(project){
    this.project = project;
    return project;
  }

  setQuestion(question){
    this.question = question;
    return question;  
  }

  checkAvailability(){
    console.log("Project: " + this.project)
    if (this.user.role == "Analyst"){
      return true;
    }else if (this.user.role == "Developer" && 
              this.project.numberOfDevelopingQuestionsPerAnalyst <= this.company.numberOfCorrectDevelopingAttempsByAnalyst) {
      return true;
    }else if (this.project.numberOfDevelopingQuestionsPerAnalyst <= this.company.numberOfCorrectDevelopingAttempsByAnalyst &&
              this.project. numberOfDevelopingQuestionsPerDeveloper <= this.company.numberOfCorrectDevelopingAttempsByDeveloper){
      return true;
    }
    return false;
  }

  //Confirms the screen loaded (?) auto-generated code
  ionViewDidLoad() {
    this.work();
  }

  work(){
    this.service.getCurrentUser().then((user_s) => {
      this.httpService.getUserById(user_s.id).subscribe((user) => {
        this.user = user;

        this.httpService.getCompanyById(user.companyId).subscribe(company => {

          this.setCompany(company);
          this.setResources(company.companyResource);


          this.httpService.getUsersByCompany(company.id).subscribe((users) => {
            this.setMembers(users.length);   
          });

          this.httpService.getCertifications().subscribe((certifications) => {
            console.log(certifications);

            var suma: number = 0;

            for (var i = 0; i < certifications.length; ++i) {
              if (suma + certifications[i].questions.length > user.correctTrainingQuestions) {
                //suma = suma + certifications[i].questions.length;

                this.setQuestionNumber(user.correctTrainingQuestions - suma);
                break;
              }
              suma = suma + certifications[i].questions.length;
              console.log("Suma" + suma);
            }            

            for (var j = 0; j < certifications.length; ++j) {
              console.log(user.competencyLevel + 1);

              if (certifications[j].level == user.competencyLevel + 1) {
                console.log(user.competencyLevel + 1);

                

                //setTimeout(() => {
                  

                  this.httpService.getQuestionsById(certifications[i].questions[this.questionnumber]).subscribe((question) => {
                                   
                    this.setQuestion(question);
                    this.qd = question.description;
                    this.a1 = question.answers[0].description;
                    this.a2 = question.answers[1].description;
                    this.a3 = question.answers[2].description;
                    this.a4 = question.answers[3].description;
                    this.showOptions();
                                
                  });
                        
                //}, 500);               
              }
            }
            
          });

        }, () => {
          this.hideOptions();
          this.error = "You are not part of a company so you can't develop a project";
        });
      });
    });    
  }
}

