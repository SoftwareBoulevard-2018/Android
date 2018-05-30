//import { InstantProject } from '../models/instantProject';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
//import { TrainingAttempt } from '../models/TrainingAttempt';
//import { Company } from '../models/company';
//import { BiddingProject } from '../models/biddingProject';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { HttpService } from './http.service';
/**
 * contains session related functions
 */
@Injectable()
export class GeneralServiceService {

  constructor(public storage: Storage,public events: Events, public httpService: HttpService) { }

  logout(){
    this.storage.remove('userInSession');
    this.events.publish('user:logout');
  }
  /**
   * saves a session with the newly logged user
   * @param user
   */
  login(user):Promise<void>{
    return this.storage.set('userInSession',user).then(() => {
      this.events.publish('user:login')
    })
  }
  /**
   * returns a promise with a instance of the user currently logged in the app
   */
  getCurrentUser():Promise<User>{
    return this.storage.get('userInSession').then((user) => {
      return user
    })
  }
}
