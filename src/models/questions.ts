export class  Questions{
    question_id: string;
    role: string;
    description: string;
    answers: [[string,string],[string,string],[string,string],[string,string]]
    constructor(question_id?:string, role?:string, description?:string, answers?: [[string,string],[string,string],[string,string],[string,string]]) {
        this.question_id = question_id;
        this.role = role;
        this.description = description;
        this.answers = answers;     
    }
  }
  