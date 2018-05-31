export class Certification {
    certificationId: string;
    role: string;
    level: number;
    project: string;
    questions: string[];
    constructor(id?:  string, role?: string, level?: number, project?: string,questions?: string[]){
		this.certificationId = id;
        this.role = role;
        this.level = level;
		this.project = project;
        this.questions = questions;
	}
  }