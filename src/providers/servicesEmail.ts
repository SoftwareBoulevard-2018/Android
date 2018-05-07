import { Injectable } from '@angular/core';



@Injectable()
export class servicesEmail {


    private emails =  [
        {
            "id": 1,
            "subject": "I need a project manager in our team",
            "sender": "jjsernaco",
            "content": "Please guys, make sure to send to the email jjsernaco@gmail.edu.co your CVS ",
            "receiver": ["cmzapata", "dddavid", "judfernandez", "vdjaramillog"],
            "date": '01/07/2018'
        },
        {
            "id": 2,
            "subject": "Negotiations beetween companies",
            "sender": "judfernandez",
            "content": "Hello Guys, I am is juan david and we need to do some negotiations beetween companies in order to get better results in the next round",
            "receiver": ["afaguilarr", "cmzapata", "vdjaramillog", "dacalles", "dddavid"],
            "date": '02/07/2018'
        },
        {
            "id": 3,
            "subject": "Training questions",
            "sender": "dacalles",
            "content": "Hello , We need to do some training questions in order to answers those questions for instant project.   Good night. Att: Daniel ",
            "receiver": ["cmzapata", "vdjaramillog", "dddavid", "judfernandez", "jpchavesm"],
            "date": '03/07/2018'
        },
        {
            "id": 4,
            "subject": "We need an analyst in our company",
            "sender": "afaguilarr",
            "content": "Hello ,  We need an analyst for our company. Just send your CV. Att: Andres Felipe",
            "receiver": ["judfernandez", "jpchavesm", "cmzapata"],
            "date": '04/07/2018'
        },
        {
            "id": 5,
            "subject": "Troubles with the account creation",
            "sender": "jpchavesm",
            "content": "Hello , I am getting some troubles with the creation of accounts guys. Sorry :(",
            "receiver": ["cmzapata", "dacalles","jjsernaco"],
            "date": '05/07/2018'
        },
        {
            "id": 6,
            "subject": "Troubles with bottons ",
            "sender": "dacalles",
            "content": "Hello , I am getting some troubles with the botton which list companies",
            "receiver": ["cmzapata"],
            "date": '08/07/2018'
        },

        {
            "id": 7,
            "subject": "We need developers in our company ",
            "sender": "vdjaramillog",
            "content": "Hello , I am Carlos and we need two developers with skills of Angular and NodeJs in our compnany",
            "receiver": ["jjsernaco", "cmzapata", "dddavid"],
            "date": '05/07/2018'
        },
        {
            "id": 15,
            "subject": "We should change our time for the project",
            "sender": "judfernandez",
            "content": "Hello , I was checking our project and I think we need to estimate more time ",
            "receiver": ["afaguilarr", "jjsernaco", "dddavid", "dacalles"],
            "date": '01/02/2019'
        },
        {
            "id": 16,
            "subject": "We should change our cost for the project",
            "sender": "afaguilarr",
            "content": "Hello , I was checking our project and I think we need to estimate more cost",
            "receiver": ["judfernandez", "dddavid", "jjsernaco", "vdjaramillog", "cmzapata"],
            "date": '01/03/2019'
        },
        {
            "id": 17,
            "subject": "We should change our time for project",
            "sender": "vdjaramillog",
            "content": "Hello , I was checking our project and I think we need to estimate more time ",
            "receiver": ["jjsernaco", "afaguilarr", "judfernandez", "cmzapata", "dddavid"],
            "date": '01/04/2019'
        },
        {
            "id": 18,
            "subject": "We need an analyst for our company",
            "sender": "cmzapata",
            "content": "Hello ,  We need an analyst for our company. Just send your CV",
            "receiver": ["dacalles", "vdjaramillog"],
            "date": '01/05/2019'
        }

    ];
 


    public getEmails() {
        return this.emails;

    }
}