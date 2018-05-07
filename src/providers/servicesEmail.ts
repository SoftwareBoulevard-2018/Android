import { Injectable } from '@angular/core';



@Injectable()
export class servicesEmail {


    private emailsSent = [
        {
            "id": 15,
            "subject": "We should change our time for the project",
            "sender": "jupvillegasgo@company.edu.co",
            "content": "Hello , I was checking our project and I think we need to estimate more time ",
            "receiver": ["cmzapata@company.edu.co", "jsnino@company.edu.co", "jorgitopro@company.edu.co", "paula_001@company.edu.co"],
            "date": '01/02/2019'
        },
        {
            "id": 16,
            "subject": "We should change our cost for the project",
            "sender": "jupvillegasgo@company.edu.co",
            "content": "Hello , I was checking our project and I think we need to estimate more cost",
            "receiver": ["eealpalav@cidenet.edu.co", "esalvarezpi@unal.edu.co", "bandradea@unal.edu.co", "scardonac@unal.edu.co", "hdgilh@unal.edu.co"],
            "date": '01/03/2019'
        },
        {
            "id": 17,
            "subject": "We should change our time for project",
            "sender": "jupvillegasgo@company.edu.co",
            "content": "Hello , I was checking our project and I think we need to estimate more time ",
            "receiver": ["lfbustamantea@company.edu.co", "sarbelaezc@company.edu.co", "jmespinosag@company.edu.co", "vgaviriam@company.edu.co", "afcalderad@company.edu.co"],
            "date": '01/04/2019'
        },
        {
            "id": 18,
            "subject": "We need an analyst for our company",
            "sender": "jupvillegasgo@company.edu.co",
            "content": "Hello ,  We need an analyst for our company. Just send your CV",
            "receiver": ["darias@unal.edu.co", "ldpenal@unal.edu.co"],
            "date": '01/05/2019'
        }
    ];


    private emailsReceived =  [
        {
            "id": 1,
            "subject": "I need a project manager in our team",
            "sender": "garena_master22e3@company.edu.co",
            "content": "Please guys, make sure to send to the email garena_master22e3@company.edu.co your CVS ",
            "receiver": ["jupvillegasgo@company.edu.co", "jsnino@company.edu.co", "jorgitopro@company.edu.co", "paula_001@company.edu.co"],
            "date": '01/07/2018'
        },
        {
            "id": 2,
            "subject": "Negotiations beetween companies",
            "sender": "george_r33@company.edu.co",
            "content": "Hello Guys, This is george for @company, We need to do some negotiations beetween companies in order to get better results in the next round",
            "receiver": ["jupvillegasgo@company.edu.co", "esalvarezpi@unal.edu.co", "bandradea@unal.edu.co", "scardonac@unal.edu.co", "hdgilh@unal.edu.co"],
            "date": '02/07/2018'
        },
        {
            "id": 3,
            "subject": "Training questions",
            "sender": "danielfmg@company.edu.co",
            "content": "Hello , We need to do some training questions in order to answers those questions for instant project.   Good night. Att: Daniel ",
            "receiver": ["lfbustamantea@company.edu.co", "sarbelaezc@company.edu.co", "jupvillegasgo@company.edu.co", "vgaviriam@company.edu.co", "afcalderad@company.edu.co"],
            "date": '03/07/2018'
        },
        {
            "id": 4,
            "subject": "We need an analyst in our company",
            "sender": "cmzapata@company.edu.co",
            "content": "Hello ,  We need an analyst for our company. Just send your CV. Att: Andrea",
            "receiver": ["darias@unal.edu.co", "ldpenal@unal.edu.co", "jupvillegasgo@company.edu.co"],
            "date": '04/07/2018'
        },
        {
            "id": 5,
            "subject": "Troubles with the account creation",
            "sender": "dv007@company.edu.co",
            "content": "Hello , I am getting some troubles with the creation of accounts guys. Sorry :(",
            "receiver": ["darias@unal.edu.co", "jupvillegasgo@company.edu.co","ldpenal@unal.edu.co"],
            "date": '05/07/2018'
        },
        {
            "id": 6,
            "subject": "Troubles with bottons ",
            "sender": "avicii@cidenet.co",
            "content": "Hello , I am getting some troubles with the botton which list companies",
            "receiver": ["andres@cidenet.co"],
            "date": '08/07/2018'
        },

        {
            "id": 6,
            "subject": "We need developers in our company ",
            "sender": "cmzapata@company.edu.co",
            "content": "Hello , I am Carlos and we need two developers with skills of Angular and NodeJs in our compnany",
            "receiver": ["darias@unal.edu.co", "ldpenal@unal.edu.co", "jupvillegasgo@company.edu.co"],
            "date": '05/07/2018'
        },

    ];
    
    constructor() { }


    public getEmailsSent() {
        return this.emailsSent;

    }


    public getEmailsReceived(){

        return this.emailsReceived;

    }




}