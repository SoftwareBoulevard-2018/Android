export class User {
    creation_date: Date;

    constructor(public id:string, public companyId?:string , public name?:string, public username?:string, 
                public password?:string, public role?:string, public competencyLevel?: number, 
                public questions_answered_right?: number, public questions_answered_wrong?: number, public resourcesSpent?: number) {
      this.creation_date = new Date();
    }
}
