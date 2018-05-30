
export class BiddingProject {
  
  constructor(
    public name?:string,
    public rewarded_k?:number,
    public amount_tester_question?:number,
    public amount_analyst_question?:number, 
    public amount_developer_question?:number, 
    public time?: number, 
    public cost?: number, 
    public required_k?: number,
    public required_analyst_level?: number, 
    public  required_developer_level?: number,
    public required_tester_level?: number) 
{}
}
