export class InstantProject {

  public name: string;
  public rewarded_k: number;
  public amount_developer_question:number;
  public amount_tester_question:number;
  public amount_analyst_question:number;
  constructor(
    public id?: string,
    name?: string, 
    rewarded_k?: number,
    amount_tester_question?:number, 
    amount_analyst_question?:number, 
    amount_developer_question?:number) {
    this.name = name;
    this.rewarded_k = rewarded_k;
    this.amount_tester_question = amount_tester_question;
    this.amount_analyst_question = amount_analyst_question;
    this.amount_developer_question = amount_developer_question;
  }
}
