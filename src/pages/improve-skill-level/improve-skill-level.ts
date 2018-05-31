import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
//import { Assignment } from './../../models/assignment';
import { User } from './../../models/user';
import { Company } from './../../models/company';
import { InstantProject } from './../../models/instantProject';
//import { Questions } from './../../models/questions';
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

  resour: number;
  mem: number;

  //Should be retrieved from server in the future
  left: number = 0;

  questionspending:number = 0;

  questionnumber: number = 0;
  preg1: Question = new Question("Some kinds of UML diagrams are:","Goal Diagram  <-","Class Diagram","Process Diagram","State Machine Diagram",true,false,false,false);
  preg2: Question = new Question("The possible verbs used in a structural relation are:","Is  <-","Are","Has  <-","Have",true,false,true,false);
  preg3: Question = new Question("Which of these are possible states of an activity in the kanban board","Done  <-","Doing  <-","Planned","Achieved",true,true,false,false);
  questions: Array<Question> = [this.preg1, this.preg2, this.preg3];

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
    
    this.checkForQuestions();
  }

  //It's meant to be used to check for remaining questions for the user in the server. Must be called every time the improve skill level page is opened.
  checkForQuestions(){
    if(this.questionspending == 0){
      this.hideOptions();  
    }else{
      this.showOptions();
    }
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

  //Function called with the SEND button, checks if the answers are correct and calls the alerts according to the result
  checkAnswers(){

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

    if(this.resour <= 0){

      this.showNoResour();

    }else if(this.answer1temp == this.questions[this.questionnumber].answer1 && this.answer2temp == this.questions[this.questionnumber].answer2 && this.answer3temp == this.questions[this.questionnumber].answer3 && this.answer4temp == this.questions[this.questionnumber].answer4){

      if(this.questionnumber<this.questions.length-1){

        this.showCorrectAnswer();
        this.questionnumber = this.questionnumber + 1;
        
      }else{
        this.showLastAnswer();
        this.hideOptions();

        this.increaseCompetencyLevel();
      }

      this.left = this.left - 1;
      //this.sendTrainingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
      this.increaseCorrectTrainingQuestions();
      this.increaseSpentResources();
      this.decreaseResources();
      this.resour = this.resour - 1;
    }else{
      this.decreaseResources();
      this.increaseSpentResources();
      //this.sendTrainingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
      this.showWrongAnswer();
      this.resour = this.resour - 1;
    }

    setTimeout(() => {
     this.updateUser();
      this.updateCompany();
      console.log("User and company have been updated");
    }, 2000);

  }
  //Slide down refresher, works for the first deliverable demo's purpose, must be updated when theres connection to the server
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.answer1temp = false;
    this.answer2temp = false;
    this.answer3temp = false;
    this.answer4temp = false;
    this.questionnumber = 0;

    this.questionspending = 3;
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
      this.checkForQuestions();
      this.left = 3;
    }, 2000);
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

  checkAvailability(){
    console.log("Project: " + this.project)
    if (this.user.role == "Analyst"){
      return true;
    }else if (this.user.role == "Developer" && 
              this.project.amount_analyst_question <= this.company.numberOfCorrectDevelopingAttempsByAnalyst) {
      return true;
    }else if (this.project.amount_analyst_question <= this.company.numberOfCorrectDevelopingAttempsByAnalyst &&
              this.project.amount_developer_question <= this.company.numberOfCorrectDevelopingAttempsByDeveloper){
      return true;
    }
    return false;
  }

  //Confirms the screen loaded (?) auto-generated code
  ionViewDidLoad() {
        this.service.getCurrentUser().then((user) => {
          this.user = user;
          console.log(user);
          this.httpService.getCompanyById(user.companyId).subscribe(company => {
            this.setCompany(company);
            this.setResources(company.companyResource);


            this.httpService.getUsersByCompany(company.id).subscribe((users) => {
              this.setMembers(users.length);   
            });

            console.log(company);

          }, error => {
            this.hideOptions();
            console.log(error);
          });

          this.httpService.getCertifications().subscribe((certifications) => {
            for (var i = 0; i < certifications.length; ++i) {
              if (certifications[i].level == this.user.competencyLevel) {

                for (var j = 0; j < certifications[i].questions.length; ++i) {
                  this.httpService.getQuestionsById(certifications[i].questions[i]).subscribe(() => {

                  });
                }

              }
            }
          });
    });

    console.log('ionViewDidLoad DevelopProjectPage');
  }
}

//Object QUESTION
class Question{
  qtext: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer1: boolean;
  answer2: boolean;
  answer3: boolean;
  answer4: boolean;

  constructor(qtext: string, option1: string, option2: string, option3: string, option4: string, answer1: boolean, answer2: boolean, answer3: boolean, answer4: boolean){
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
}

