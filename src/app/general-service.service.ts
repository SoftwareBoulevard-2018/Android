import { InstantProject } from '../models/instantProject';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Company } from '../models/company';
import { BiddingProject } from '../models/biddingProject';
/**
 * contains burned data to show the functionality of the GUI
 */
@Injectable()
export class GeneralServiceService {

  user_type;

  username;

  loggedusr;

  users = [new User("Andres Felipe Aguilar","afaguilarr","ElMejor123","Developer","UNAL",2,3),
    new User("John Jairo Serna","jjsernaco","holaMUNDO456","Project Manager","UNAL"),
    new User("Carlos Mario Zapata","cmzapata","EnserioEsaEsTuPregunta?","Game Administrator"),
    new User("David","dddavid","david","Project Manager","Amazon"),
    new User("David Andres Calle","dacalles","gogo123","Tester","Amazon"),
    new User("Juan David Fernandez Moreno","judfernandez","fatbastard","Project Manager"),
    new User("Juan Pablo Chaves Morales","jpchavesm","ouiaboo","Developer", "Amazon"),
    new User("Victor Daniel JAramillo Gomez", "vdjaramillog","0000","Developer","UNAL"),
    new User("1", "1","1","Game Administrator"),
    new User("2", "2","2","Project Manager")];

  projects = [new BiddingProject(1,"FIFA",10,3, 10, 10, 10, 5000,0, 0, 0 ,0),
    new BiddingProject(2,"Bancolombia System",10,3, 10, 10, 10, 5000,0, 0, 0 ,0)];
  
  bidProjects = [new BiddingProject(1,"FIFA",10,3, 10, 10, 10, 5000,0, 0, 0 ,0),
    new BiddingProject(2,"Bancolombia System",10,3, 10, 10, 10, 5000,0, 0, 0 ,0)];

  InstProjects = [new InstantProject(10, "Excel dataBase", 5, 2, 2, 2),
    new InstantProject(11, "Calculator", 6, 2, 2, 2)];

  user_to_be_updated;

  companies = [new Company("UNAL",this.users[1],
    "http://unal.edu.co/typo3conf/ext/unal_skin_default/Resources/Public/images/escudoUnal_black.png",1,
    12, [this.users[0], this.users[7]],"FIFA"),
    new Company("Google",undefined,"http://educainternet.es/pictures/4074.png"),
    new Company("Amazon",this.users[3],"https://png.icons8.com/windows/1600/amazon.png",
    undefined, 6, [this.users[4], this.users[6]])];

  company_to_be_updated;

  constructor() { }
}
