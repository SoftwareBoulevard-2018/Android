export class User {
    creation_date: Date;
    // The following are dummy values,
    // that means they are not going to be in the final models but still they are necessary to show some content

    constructor(public id:string, public name?:string, public username?:string, public password?:string, public role?:string,
                public questions_answered_right?: number, public questions_answered_wrong?: number) {
      this.creation_date = new Date();
    }
}
