import { Answer } from '../models/answer';
export class  Questions{
    question_id: string;
    role: string;
    description: string;
    answers: Answer[];
    constructor(_id?:string, role?:string, description?:string, answers?: Answer[]) {
        this.question_id = _id;
        this.role = role;
        this.description = description;
        this.answers = answers;     
    }
  }
} 