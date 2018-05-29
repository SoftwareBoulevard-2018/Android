import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Company } from '../models/company';
import { Email } from '../models/email';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(public http: HttpClient) { }

  static apiURL = 'http://35.196.111.251:3000';
  //static apiURL = 'http://localhost:3000';
  static usersURL = '/users';
  static usersURL2 = '/username';
  static companiesURL = '/companies';
  static loginURL = '/login';
  static emailURL = '/emails';
  static reportsURL = '/reports';

  // All services related to Users
  getAllUsers() {
    return this.http.get<User[]>(HttpService.apiURL + HttpService.usersURL);
  }
  getUserById(userId: string) {
    return this.http.get<User>(HttpService.apiURL + HttpService.usersURL + '/' + userId);
  }
  getUserByUsername(username: string) {
    return this.http.get<User>(HttpService.apiURL + HttpService.usersURL + HttpService.usersURL2 + '/' + username);
  }
  createUser(user: User) {
    return this.http.post<User>(HttpService.apiURL + HttpService.usersURL,
      JSON.stringify(user), HttpService.httpOptions);
  }
  updateUser(user, userId) {
    return this.http.put<Object>(HttpService.apiURL + HttpService.usersURL + '/' + userId,
      JSON.stringify(user), HttpService.httpOptions);
  }
  getUserByRoleCompany(role, companyId) {
    return this.http.post<User[]>(HttpService.apiURL + HttpService.usersURL + HttpService.usersURL2,
      JSON.stringify({ role: role, companyId: companyId }), HttpService.httpOptions);
  }
  getUsersByCompany(companyId){
    return this.http.get<User[]>(HttpService.apiURL + HttpService.usersURL + '/company/' + companyId);
  }

  // All services related to companies
  getAllCompanies() {
    return this.http.get<Company[]>(HttpService.apiURL + HttpService.companiesURL);
  }
  getCompanyById(companyId: string) {
    return this.http.get<Company>(HttpService.apiURL + HttpService.companiesURL + '/' + companyId);
  }
  createCompany(company: Company) {
    return this.http.post<Company>(HttpService.apiURL + HttpService.companiesURL,
      JSON.stringify(company), HttpService.httpOptions);
  }
  updateCompany(company, companyId) {
    return this.http.put<Object>(HttpService.apiURL + HttpService.companiesURL + '/' + companyId,
      JSON.stringify(company), HttpService.httpOptions);
  }

  // All services related to session
  getSession() {
    return this.http.get<User>(HttpService.apiURL + HttpService.loginURL);
  }
  login(username, password) {
    return this.http.post<User>(HttpService.apiURL + HttpService.loginURL,
      JSON.stringify({ username: username, password: password }), HttpService.httpOptions);
  }

  // All services related to email
  read(idUsuario) {
     return this.http.get<Email[]>(HttpService.apiURL + HttpService.emailURL + '/read/' + idUsuario);
  }
  send(email: Email){
    return this.http.post<Email>(HttpService.apiURL + HttpService.emailURL + '/send/',
      JSON.stringify(email), HttpService.httpOptions);
  }
  sent(idUsuario) {
     return this.http.get<Email[]>(HttpService.apiURL + HttpService.emailURL + '/sent/' + idUsuario);
  }  
  updateState(idUsuario, idEmail){
    return this.http.post<Email>(HttpService.apiURL + HttpService.emailURL + '/updateState/',
      JSON.stringify({idUsuario: idUsuario, idEmail: idEmail}), HttpService.httpOptions);
  }

  // All services related to reports
  getReports(){
    return this.http.get(HttpService.apiURL + HttpService.reportsURL);
  }
}
