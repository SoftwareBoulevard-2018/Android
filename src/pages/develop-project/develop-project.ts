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
  //a_questions: Questions[] = [new Questions("A", "B", "C", 
  //                            [["D", "E"], ["F", "G"], ["H", "I"], ["J", "K"]])];
  //temp_array = Questions[] = [];
  a_questions: Questions[];
  q_developer: Questions[];
  q_tester: Questions[];

  //Should be retrieved from server in the future
  resour: number;
  mem: number;

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

      if (this.user.role == "Analyst") {
        this.increaseAnalystQuestions();
      }else if (this.user.role == "Developer") {
        this.increaseDeveloperQuestions();
      }else{
        this.increaseTesterQuestions();
      }

      if(this.questionnumber < this.questions.length-1){
        this.showCorrectAnswer();
        this.questionnumber = this.questionnumber + 1;
      }else{
        this.showLastAnswer();
        this.hideOptions();
      }

      this.resour = this.resour-1;
      this.sendDevelopingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
      this.increaseCorrectProjectQuestions();
      this.increaseSpentResources();
      this.decreaseResources();

    }else{

      this.decreaseResources();
      this.increaseSpentResources();
      this.sendDevelopingAttempt('right', this.questions[this.questionnumber].qtext, answers, this.user.id);
      this.showWrongAnswer();
      this.resour = this.resour-1;
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

  setQuestion(question: Questions, position){
  //setQuestion(des, o1, o2, o3, o4, a1, a2, a3, a4, position){
    //this.a_questions.push(question);
    //console.log(this.a_questions);
    /*
    if (position >= this.questions.length) {
      this.questions.push(
        new Question(des,
                     o1,
                     o2,
                     o3,
                     o4,
                     a1,
                     a2,
                     a3,
                     a4,
        )

      )
    }else{
      this.questions[position].qtext =  des;
      this.questions[position].option1 =  o1;
      this.questions[position].option2 =  o2;
      this.questions[position].option3 =  o3;
      this.questions[position].option4 =  o4;
      this.questions[position].answer1 =  a1;
      this.questions[position].answer2 =  a2;
      this.questions[position].answer3 =  a3;
      this.questions[position].answer4 =  a4;
    }
    */

    if (position >= this.questions.length) {
      this.a_questions.push(question)
    }else{
      this.a_questions[position].description = question.description;
      this.a_questions[position].answers = question.answers;
      this.a_questions[position].question_id = question.question_id;
      this.a_questions[position].role = question.role;
    }

  }

  printQuestions(){
    console.log(this.a_questions);
  }

  getQuestions(assignments, user){
    

    for (var j = 0; j < assignments.length; ++j) {
                          
      this.httpService.getQuestionsById(assignments[j].questionId).subscribe((question) => {
      

        if (question.role == user.role) {
          console.log(question.description);  
          /*
          this.setQuestion(question.description,
                           question.answers[0][0],
                           question.answers[1][0],
                           question.answers[2][0],
                           question.answers[3][0],
                           question.answers[0][1], 
                           question.answers[1][1], 
                           question.answers[2][1], 
                           question.answers[3][1], 
                           j);*/
          //this.setQuestion(question, j);
          /*if (j >= this.a_questions.length) {
            this.a_questions.push(question)
          }else{
            this.a_questions[j].description = "a";
            this.a_questions[j].answers = question.answers;
            this.a_questions[j].question_id = question.question_id;
            this.a_questions[j].role = question.role;
          }*/
        }
      }, error => {
        this.hideOptions();
        console.log(error);
      });

    }

    

    //this.a_questions.pop();

    setTimeout(() => {
      console.log(this.a_questions);

      if (!this.checkAvailability()) {
        console.log(this.checkAvailability())
        this.hideOptions();
      }else{
        this.showOptions();
      }
      
      //this.questionnumber = 1;                
    }, 2000);
    
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

            this.httpService.getRecordsByCompany(company.id).subscribe((records) => {
              console.log(records);

              for (var i = 0; i < records.length; ++i) {
                if (records[i].finishDate == undefined) {

                    this.httpService.getInstantProjectById(records[i].project).subscribe((project) => {
                      this.setProject(project);
                      console.log(project);
                    });


                    this.httpService.getAssignmentById(records[i].project).subscribe((assignments) => {
                      console.log(assignments);
                      setTimeout(() => {
                        this.getQuestions(assignments, user);
                      }, 2000);

                      //console.log("Availability: " + this.checkAvailability());
                    }, error => {
                      this.hideOptions();
                      console.log(error);
                    });
                  
                }
              }
            }, error => {
            this.hideOptions();
            console.log(error);
          })
          }, error => {
            this.hideOptions();
            console.log(error);
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
