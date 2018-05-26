import { InstantProject } from '../models/instantProject';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Company } from '../models/company';
import { BiddingProject } from '../models/biddingProject';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
/**
 * contains burned data to show the functionality of the GUI
 */
@Injectable()
export class GeneralServiceService {
  user: User;

  projects = [new BiddingProject(1,"FIFA",10,3, 10, 10, 10, 5000,0, 0, 0 ,0),
    new BiddingProject(2,"Bancolombia System",10,3, 10, 10, 10, 5000,0, 0, 0 ,0)];
  
  bidProjects = [new BiddingProject(1,"FIFA",10,3, 10, 10, 10, 5000,0, 0, 0 ,0),
    new BiddingProject(2,"Bancolombia System",10,3, 10, 10, 10, 5000,0, 0, 0 ,0)];

  InstProjects = [new InstantProject(10, "Excel dataBase", 5, 2, 2, 2),
    new InstantProject(11, "Calculator", 6, 2, 2, 2)];

  user_to_be_updated;

  company_to_be_updated;

  constructor(public storage: Storage,public events: Events) { }

  logout(){
    this.user = null;
    this.storage.remove('userInSession');
    this.events.publish('user:logout');
  }
  login(user){
    this.user = user;
    this.storage.set('userInSession',user).then(() => {
      this.events.publish('user:login')
    })
  }
}
