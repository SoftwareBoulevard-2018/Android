var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { FileTransfer } from '@ionic-native/file-transfer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ThrowStmt } from '@angular/compiler';
/**
 * Provides communication with the api
 */
var HttpService = /** @class */ (function () {
    function HttpService(http, transfer) {
        this.http = http;
        this.transfer = transfer;
    }
    HttpService_1 = HttpService;
    // All services related to Users
    HttpService.prototype.getAllUsers = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.usersURL);
    };
    HttpService.prototype.getUserById = function (userId) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.usersURL + '/' + userId);
    };
    HttpService.prototype.getUserByUsername = function (username) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.usersURL + HttpService_1.usersURL2 + '/' + username);
    };
    HttpService.prototype.createUser = function (user) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.usersURL, JSON.stringify(user), HttpService_1.httpOptions);
    };
    HttpService.prototype.updateUser = function (user, userId) {
        return this.http.put(HttpService_1.apiURL + HttpService_1.usersURL + '/' + userId, JSON.stringify(user), HttpService_1.httpOptions);
    };
    HttpService.prototype.updateInstantProject = function (instantProject) {
        console.log(instantProject);
        console.log(instantProject.id);
        return this.http.put(HttpService_1.apiURL + HttpService_1.instantProjectURL + HttpService_1.updateInstantProjectURL + '/' + instantProject.id, JSON.stringify(instantProject), HttpService_1.httpOptions);
    };
    HttpService.prototype.getUserByRoleCompany = function (role, companyId) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.usersURL + HttpService_1.usersURL2, JSON.stringify({ role: role, companyId: companyId }), HttpService_1.httpOptions);
    };
    HttpService.prototype.getUsersByCompany = function (companyId) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.usersURL + '/company/' + companyId);
    };
    HttpService.prototype.login = function (username, password) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.loginURL, JSON.stringify({ username: username, password: password }), HttpService_1.httpOptions);
    };
    // All services related to companies
    HttpService.prototype.getAllCompanies = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.companiesURL);
    };
    HttpService.prototype.getCompanyById = function (companyId) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.companiesURL + '/' + companyId);
    };
    HttpService.prototype.createCompany = function (company) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.companiesURL, JSON.stringify(company), HttpService_1.httpOptions);
    };
    HttpService.prototype.updateCompany = function (company, companyId) {
        return this.http.put(HttpService_1.apiURL + HttpService_1.companiesURL + '/' + companyId, JSON.stringify(company), HttpService_1.httpOptions);
    };
    // uploads the image to the server before a company is created or updated
    HttpService.prototype.uploadCompanyImage = function (imageURI) {
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            headers: {}
        };
        return fileTransfer.upload(imageURI, HttpService_1.apiURL + HttpService_1.companiesURL + "/image", options);
    };
    // All services related to email
    HttpService.prototype.read = function (idUsuario) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.emailURL + '/read/' + idUsuario);
    };
    HttpService.prototype.send = function (email) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.emailURL + '/send/', JSON.stringify(email), HttpService_1.httpOptions);
    };
    HttpService.prototype.sent = function (idUsuario) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.emailURL + '/sent/' + idUsuario);
    };
    HttpService.prototype.updateState = function (idEmail, email) {
        return this.http.put(HttpService_1.apiURL + HttpService_1.emailURL + '/updateState/' + idEmail, JSON.stringify(email), HttpService_1.httpOptions);
    };
    // All services related to reports
    //this gets the number of users and companies
    HttpService.prototype.getReports = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.reportsURL);
    };
    //All services related to Puzzles
    HttpService.prototype.getAllPuzzles = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.puzzleURL);
    };
    //All services related to Projects
    HttpService.prototype.getBiddingProjectById = function (id) {
        return this.http.get(HttpService_1.apiURL + '/biddingProjects' + '/' + id);
    };
    HttpService.prototype.getAllBiddingProjects = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.biddingProjectURL + '/' + 'getBiddingProject');
    };
    HttpService.prototype.getInstantProjectById = function (id) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.instantProjectURL + '/' + id);
    };
    HttpService.prototype.getAllInstantProjects = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.instantProjectURL + '/' + 'getInstantProject');
    };
    HttpService.prototype.createBiddingProject = function (biddingProject) {
        console.log(JSON.stringify(biddingProject));
        console.log(HttpService_1.apiURL + HttpService_1.biddingProjectURL, JSON.stringify(biddingProject), HttpService_1.httpOptions);
        return this.http.post(HttpService_1.apiURL + HttpService_1.biddingProjectURL + HttpService_1.createBiddingProjectURL, JSON.stringify(biddingProject), HttpService_1.httpOptions);
    };
    HttpService.prototype.createInstantProject = function (instantProject) {
        console.log(JSON.stringify(instantProject));
        console.log(HttpService_1.apiURL + HttpService_1.instantProjectURL, JSON.stringify(instantProject), HttpService_1.httpOptions);
        return this.http.post(HttpService_1.apiURL + HttpService_1.instantProjectURL + HttpService_1.createInstantProjectURL, JSON.stringify(instantProject), HttpService_1.httpOptions);
    };
    HttpService.prototype.createQuestion = function (questions) {
        console.log(JSON.stringify(questions));
        console.log(HttpService_1.apiURL + HttpService_1.questionURL, JSON.stringify(questions), HttpService_1.httpOptions);
        return this.http.post(HttpService_1.apiURL + HttpService_1.questionURL + HttpService_1.createQuestionURL, JSON.stringify(questions), HttpService_1.httpOptions);
    };
    HttpService.prototype.getQuestionsById = function (id) {
        return this.http.get(HttpService_1.apiURL + '/questions/getQuestionById/' + id);
    };
    HttpService.prototype.getAllQuestions = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.getQuestionURL);
    };
    HttpService.prototype.getAssignmentById = function (id) {
        return this.http.get(HttpService_1.apiURL + '/assignments/' + id);
    };
    HttpService.prototype.getAllAssignments = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.getAssignmentURL);
    };
    HttpService.prototype.getTrainingAttemptsByState = function (state) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.trainingAttemptsURL, JSON.stringify({ state1: state }), HttpService_1.httpOptions);
    };
    HttpService.prototype.getDevelopingAttemptsByState = function (state) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.developingAttemptsURL, JSON.stringify({ state1: state }), HttpService_1.httpOptions);
    };
    HttpService.prototype.createTrainingAttempt = function (trainingAttempt) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.trainingAttemptsURL, JSON.stringify(trainingAttempt), HttpService_1.httpOptions);
    };
    HttpService.prototype.createDevelopingAttempt = function (developingAttempt) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.developingAttemptsURL, JSON.stringify(developingAttempt), HttpService_1.httpOptions);
    };
    HttpService.prototype.getInvitationByUserAndState = function (id, state) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.invitationsURL + '/getCurrentInvitation', JSON.stringify({ user: id, state: state }), HttpService_1.httpOptions);
    };
    HttpService.prototype.updateInvitation = function (invitation, id) {
        return this.http.put(HttpService_1.apiURL + HttpService_1.invitationsURL + '/' + id, JSON.stringify(invitation), HttpService_1.httpOptions);
    };
    HttpService.prototype.getCertifications = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.certificationsURL + HttpService_1.getCertificationsURL);
    };
    //All services related to records
    HttpService.prototype.createRecord = function (record) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.recordsURL, JSON.stringify(record), HttpService_1.httpOptions);
    };
    HttpService.prototype.getAllRecords = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.recordsURL);
    };
    HttpService.prototype.getRecordsByCompany = function (company) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.recordsURL + '/' + company);
    };
    HttpService.prototype.getRecordsByProject = function (project) {
        return this.http.get(HttpService_1.apiURL + HttpService_1.recordsURL + '/' + project);
    };
    HttpService.prototype.getRecordsByFinishDateAndCompany = function (finishDate, company) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.recordsURL + HttpService_1.getCurrentCompanyURL, JSON.stringify({ company: company, finishDate: finishDate }), HttpService_1.httpOptions);
    };
    //All services related to Estimation
    HttpService.prototype.createEstimation = function (estimation) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.estimationURL, JSON.stringify(estimation), HttpService_1.httpOptions);
    };
    HttpService.prototype.getEstimationByPMAndProject = function (projectManagerUsername, projectName) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.estimationURL + HttpService_1.getEstimationByPMAndProjectURL, JSON.stringify({ projectManagerUsername: projectManagerUsername, projectName: projectName }), HttpService_1.httpOptions);
    };
    HttpService.prototype.getEstimationByProjectManagerUsernameAndState = function (projectManagerUsername, state) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.estimationURL + HttpService_1.getEstimationsByPMAndStateURL, JSON.stringify({ projectManagerUsername: projectManagerUsername, state: state }), HttpService_1.httpOptions);
    };
    // All services related to Invitations
    HttpService.prototype.getinvitations = function () {
        return this.http.get(HttpService_1.apiURL + HttpService_1.invitationsURL);
    };
    HttpService.prototype.createinvitations = function (invitation) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.invitationsURL, JSON.stringify(invitation), HttpService_1.httpOptions);
    };
    HttpService.prototype.getinvitationsByUserAndCompany = function (user, company) {
        return this.http.post(HttpService_1.apiURL + HttpService_1.certificationURL + '/getCurrentInvitationCom/', JSON.stringify(user, company), HttpService_1.httpOptions);
    };
    var HttpService_1;
    HttpService.httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    /**
     * defaul apiURL, can be changed in loginPage
     */
    //static apiURL = 'http://35.196.111.251:3000';
    HttpService.apiURL = 'http://localhost:3000';
    /**
     * routes must coincide with backend services
     */
    HttpService.usersURL = '/users';
    HttpService.usersURL2 = '/username';
    HttpService.companiesURL = '/companies';
    HttpService.loginURL = '/login';
    HttpService.emailURL = '/emails';
    HttpService.reportsURL = '/reports';
    HttpService.certificationsURL = '/certification';
    HttpService.puzzlesURL = '/puzzles';
    HttpService.recordsURL = '/records';
    HttpService.puzzleURL = '/puzzles';
    HttpService.biddingProjectURL = '/biddingProjects';
    HttpService.questionURL = '/questions';
    HttpService.instantProjectURL = '/instantProjects';
    HttpService.getCurrentCompanyURL = '/getCurrentProject';
    HttpService.createBiddingProjectURL = '/createBiddingProject';
    HttpService.createInstantProjectURL = '/createInstantProject';
    HttpService.createQuestionURL = '/createQuestion';
    HttpService.getBiddingProjectURL = '/getBiddingProject';
    HttpService.getInstantProjectURL = '/getInstantProject';
    HttpService.getQuestionURL = '/getQuestions';
    HttpService.getAssignmentURL = '/getAssignment';
    HttpService.certificationURL = '/certification';
    HttpService.updateInstantProjectURL = '/updateInstantProject';
    HttpService.trainingAttemptsURL = '/trainingAttempts';
    HttpService.developingAttemptsURL = '/developingAttempts';
    HttpService.invitationsURL = '/invitations';
    HttpService.estimationURL = '/estimations';
    HttpService.getCurrentProjectManagerURL = '/getCurrentPm';
    HttpService.getCurrentProjectManager2URL = '/getCurrentProjectM';
    HttpService.getEstimationByPMAndProjectURL = '/getEstimationByPMAndProject';
    HttpService.getEstimationsByPMAndStateURL = '/getEstimationsByProjectManagerUsernameAndState';
    HttpService.getCertificationsURL = '/getCertification';
    HttpService = HttpService_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            FileTransfer])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map