export class Assignment {
    assigment_id: string;
    projectId: string;
    questionId: string;
    project: string;
    question: string;
    state: string;
    constructor(assigment_id?:  string, projectId?: string, questionId?: string, project?: string,question?: string,state?: string){
		this.assigment_id = assigment_id;
    this.projectId = projectId;

    this.questionId = questionId;
		this.project = project;
        this.question = question;
        this.state = state;
	}
  }