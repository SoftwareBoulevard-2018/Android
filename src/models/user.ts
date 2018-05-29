export class User {

    constructor(public id:string,public username:string,  public name?:string,  
                public password?:string, public createdAt?:Date, public role?:string, public competencyLevel?: number, 
                public correctTrainingQuestions?: number, public correctProjectQuestions?: number, public resourcesSpent?: number) {
    }
}
