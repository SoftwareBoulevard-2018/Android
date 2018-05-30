export class InstantProject {
<<<<<<< HEAD

  public name: string;
  public rewarded_k: number;
  public amount_developer_question:number;
  public amount_tester_question:number;
  public amount_analyst_question:number;
  constructor(
    name?: string, 
    rewarded_k?: number,
    amount_tester_question?:number, 
    amount_analyst_question?:number, 
    amount_developer_question?:number) {
=======
  id: string;
  name: string;
  numberOfDevelopingQuestionsPerAnalyst:number;
  numberOfDevelopingQuestionsPerDeveloper:number;
  numberOfDevelopingQuestionsPerTester:number;
  rewarded_K: number;
  constructor(id?: string, name?: string,
    numberOfDevelopingQuestionsPerAnalyst?:number,  numberOfDevelopingQuestionsPerTester?:number, 
    numberOfDevelopingQuestionsPerDeveloper?:number,  rewarded_K?: number) {
    this.id = id;
    this.name = name;
    this.rewarded_K =  rewarded_K;
    this.numberOfDevelopingQuestionsPerTester =  numberOfDevelopingQuestionsPerTester;
    this.numberOfDevelopingQuestionsPerAnalyst =  numberOfDevelopingQuestionsPerAnalyst;
    this.numberOfDevelopingQuestionsPerDeveloper =  numberOfDevelopingQuestionsPerDeveloper;
  }
}

/*
export class InstantProject {
  project_id: number;
  name: string;
  rewarded_k: number;
  amount_developer_question:number;
  amount_tester_question:number;
  amount_analyst_question:number;
  constructor(project_id?: number, name?: string, rewarded_k?: number,
  amount_tester_question?:number, amount_analyst_question?:number, amount_developer_question?:number) {
    this.project_id = project_id;
>>>>>>> master
    this.name = name;
    this.rewarded_k = rewarded_k;
    this.amount_tester_question = amount_tester_question;
    this.amount_analyst_question = amount_analyst_question;
    this.amount_developer_question = amount_developer_question;
  }
}*/
