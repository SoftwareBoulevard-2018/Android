export class User {
    creation_date: Date;

    constructor(public id:string, public name?:string, public username?:string, public password?:string, public role?:string,
                public questions_answered_right?: number, public questions_answered_wrong?: number) {
      this.creation_date = new Date();
    }
}
