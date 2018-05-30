
export class BiddingProject {
  
  constructor(
    public id?: string,
    public name?:string,
    public numberOfDevelopingQuestionsPerAnalyst?:number,
    public numberOfDevelopingQuestionsPerDeveloper?:number, 
    public numberOfDevelopingQuestionsPerTester?:number,
    public required_K?: number,
    public rewarded_K?:number, 
    public cost?: number,
    public time?: number,  
    public required_tester_level?: number, 
    public  required_developer_level?: number,
    public required_analyst_level?: number) 
{}
}
 