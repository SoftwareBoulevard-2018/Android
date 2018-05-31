import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GeneralServiceService } from '../../app/general-service.service';
import { HttpService } from '../../app/http.service';
import { Assignment } from './../../models/assignment';
import { User } from './../../models/user';
import { Company } from './../../models/company';
import { InstantProject } from './../../models/instantProject';
import { Questions } from './../../models/questions';
import { DevelopingAttempt } from './../../models/developingAttempt';

@IonicPage()
@Component({
  selector: 'page-develop-project',
  templateUrl: 'develop-project.html',
})
export class DevelopProjectPage {
  user: User;
  company: Company;
  analyst: number;
  developer: number;
  tester: number;
  project: InstantProject;
  assignments: Assignment;
  question: Questions;

  //a_questions: Questions[] = [new Questions("A", "B", "C", 
  //                            [["D", "E"], ["F", "G"], ["H", "I"], ["J", "K"]])];
  //temp_array = Questions[] = [];
  a_questions: Questions[];
  q_developer: Questions[];
  q_tester: Questions[];

  //Should be retrieved from server in the future
  resour: number;
  mem: number;
  error: string;

  questionspending:number = 0;

  questionnumber: number = 0;
  preg1: Question = new Question("Some kinds of UML diagrams are:","Goal Diagram  <-","Class Diagram","Process Diagram","State Machine Diagram",true,false,false,false);
  preg2: Question = new Question("The possible verbs used in a structural relation are:","Is  <-","Are","Has  <-","Have",true,false,true,false);
  preg3: Question = new Question("Which of these are possible states of an activity in the kanban board","Done  <-","Doing  <-","Planned","Achieved",true,true,false,false);
  //questions: Array<Question> = [this.preg1, this.preg2, this.preg3];
  questions: string[];

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

  textNoHid: boolean = false;
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
      this.error =  "You don't have any activities pending in this project";
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
      message: 'This was your last question, your job in this project is done',
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

    var next_question = false;
    var end_project = false;

    if(this.resour <= 0){

      this.showNoResour();

    }else if(this.answer1temp == this.question.answers[0].veracity && this.answer2temp == this.question.answers[1].veracity && this.answer3temp == this.question.answers[2].veracity && this.answer4temp == this.question.answers[3].veracity){

      var nun: number;
      if (this.user.role == "Analyst") {
        this.increaseAnalystQuestions();
        nun = this.project.numberOfDevelopingQuestionsPerAnalyst;
      }else if (this.user.role == "Developer") {
        this.increaseDeveloperQuestions();
        nun = this.project.numberOfDevelopingQuestionsPerDeveloper;
      }else{
        this.increaseTesterQuestions();
        nun = this.project.numberOfDevelopingQuestionsPerTester;
      }

      if(this.questionnumber < nun - 1){
        this.showCorrectAnswer();
        next_question = true;
      }else{
        this.showLastAnswer();
        this.hideOptions();


        if (this.user.role == "Tester") {
          end_project = true;
          this.error = "Your company does not have any active project right now"
        }
      }

      this.questionnumber = this.questionnumber + 1;
      this.resour = this.resour - 1;
      //this.sendDevelopingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
      this.increaseCorrectProjectQuestions();
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
      this.updateUser();
      this.updateCompany();

      setTimeout(() => {

        if (next_question) {
          this.work();
        }else if(end_project){
          this.closeProject();
        }

      }, 1000);

      console.log("User and company have been updated");
    }, 1000);
  }

  //Slide down refresher, works for the first deliverable demo's purpose, must be updated when theres connection to the server
  doRefresh(refresher) {

    setTimeout(() => {
      refresher.complete();
      this.work()
    }, 2000);
    
  }

  closeProject(){
    this.httpService.getRecordsByFinishDateAndCompany(undefined, this.company.id).subscribe((record) => {
        record.finishDate = new Date();
        this.company.capacityK = this.company.capacityK + this.project.rewarded_k;

        setTimeout(() => {
          this.httpService.updateRecord(record, record._id).subscribe(() => {}, (error) => {console.log(error)});
          this.httpService.updateCompany(this.company, this.company.id).subscribe(() => {}, (error) => {console.log(error)});
        }, 2000);
    });
  }

  updateUser(){
    this.httpService.updateUser(this.user, this.user.id).subscribe((data) => {console.log(data)}, (error) => {console.log(error)});
    return this.user;
  }

  updateCompany(){
    this.httpService.updateCompany(this.company, this.company.id).subscribe((data) => {console.log(data)}, (error) => {console.log(error)});
    return this.company;
  }

  sendDevelopingAttempt(state, question, answer, user){
    var ta = new DevelopingAttempt(0, state, question, answer, user);
    this.httpService.createDevelopingAttempt(ta).subscribe((data) => {console.log(data)}, (error) => {console.log(error)});
  }

  decreaseResources(){
    this.company.companyResource = this.company.companyResource - 1;
    return this.user;
  }

  increaseSpentResources(){
    this.user.resourcesSpent = this.user.resourcesSpent + 1;
    return this.user;
  }

  increaseCorrectProjectQuestions(){
    this.user.correctProjectQuestions = this.user.correctProjectQuestions + 1;
    return this.user;
  }

  increaseAnalystQuestions(){
    this.company.numberOfCorrectDevelopingAttempsByAnalyst = this.company.numberOfCorrectDevelopingAttempsByAnalyst + 1;
    return this.company;
  }

  increaseDeveloperQuestions(){
    this.company.numberOfCorrectDevelopingAttempsByDeveloper = this.company.numberOfCorrectDevelopingAttempsByDeveloper + 1;
    return this.company;
  }

  increaseTesterQuestions(){
    this.company.numberOfCorrectDevelopingAttempsByTester = this.company.numberOfCorrectDevelopingAttempsByTester + 1;
    return this.company;
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

  setAssignment(assignment){
    //this.assignment = assignment;
    return assignment;
  }

  setQuestions(questions){
    this.questions = questions;
    return questions;
  }

  setQuestion(question){
    this.question = question;
    return question;  
  }

  checkAvailability(){
    console.log("Project: " + this.project)
    if (this.user.role == "Analyst"){
      this.questionnumber = this.company.numberOfCorrectDevelopingAttempsByAnalyst;
      return true;
    }else if (this.user.role == "Developer" && 
              this.project.numberOfDevelopingQuestionsPerAnalyst <= this.company.numberOfCorrectDevelopingAttempsByAnalyst) {
      this.questionnumber = this.company.numberOfCorrectDevelopingAttempsByDeveloper;
      return true;
    }else if (this.project.numberOfDevelopingQuestionsPerAnalyst <= this.company.numberOfCorrectDevelopingAttempsByAnalyst &&
              this.project.numberOfDevelopingQuestionsPerDeveloper <= this.company.numberOfCorrectDevelopingAttempsByDeveloper){
      this.questionnumber = this.company.numberOfCorrectDevelopingAttempsByTester;
      return true;
    }
    return false;
  }

  //Confirms the screen loaded (?) auto-generated code
  ionViewDidLoad() {
    this.work();
  }

  work(){
    this.service.getCurrentUser().then((user) => {
      this.user = user;
      //console.log(user);
      this.httpService.getCompanyById(user.companyId).subscribe(company => {
        this.setCompany(company);
        this.setResources(company.companyResource);


        this.httpService.getUsersByCompany(company.id).subscribe((users) => {
          this.setMembers(users.length);   
        });

        //console.log(company);

        this.httpService.getRecordsByCompany(company.id).subscribe((records) => {
          //console.log(records);

          for (var i = 0; i < records.length; ++i) {
            if (records[i].finishDate == undefined) {

              this.httpService.getInstantProjectById(records[i].project).subscribe((project) => {
                this.setProject(project);
                //console.log(project);
              });


              this.httpService.getAssignmentById(records[i].project).subscribe((assignments) => {

                setTimeout(() => {

                  if (!this.checkAvailability()) {
                    console.log("No puede");
                    this.hideOptions();
                    this.error = "You don't have any activities pending in this project"
                  }else{
                    console.log("Sí puede");

                    var count = 0;

                    for (var i = 0; i < assignments.length; ++i) {
                      this.httpService.getQuestionsById(assignments[i].questionId).subscribe((question) => {
                               
                        if (question.role == user.role) {
                          //console.log("holiwis");

                          if (count == this.questionnumber) {
                            this.setQuestion(question);
                            this.qd = question.description;
                            this.a1 = question.answers[0].description;
                            this.a2 = question.answers[1].description;
                            this.a3 = question.answers[2].description;
                            this.a4 = question.answers[3].description;
                            this.showOptions();
                          }

                          count = count + 1;
                        }else{
                            //console.log(question.role + " != " + user.role);
                        }
                      });
                    }
                  }
                }, 1000);                     
                        
              }, error => {
                this.hideOptions();
                this.error = "This project does not have any assigned questions right now"
                console.log(error);
              });
                  
            }
          }
        }, error => {
          this.hideOptions();
          this.error = "Your company does not have any active project right now"
          console.log(error);
        });
      }, error => {
        this.hideOptions();
        this.error = "You are not part of a company so you can't develop a project"
        console.log(error);
      });
    });    
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
