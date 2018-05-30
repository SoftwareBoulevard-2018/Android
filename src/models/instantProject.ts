export class InstantProject {

  public name: string;
  public rewarded_k: number;
  public numberOfDevelopingQuestionsPerAnalyst:number;
  public numberOfDevelopingQuestionsPerDeveloper:number;
  public numberOfDevelopingQuestionsPerTester:number;
  constructor(
    public id?: string,
    name?: string, 
    numberOfDevelopingQuestionsPerAnalyst?:number, 
    numberOfDevelopingQuestionsPerDeveloper?:number, 
    numberOfDevelopingQuestionsPerTester?:number,
    rewarded_k?: number) {
    this.name = name;
    this.rewarded_k = rewarded_k;
    this.numberOfDevelopingQuestionsPerAnalyst = numberOfDevelopingQuestionsPerAnalyst;
    this.numberOfDevelopingQuestionsPerDeveloper = numberOfDevelopingQuestionsPerDeveloper;
    this.numberOfDevelopingQuestionsPerTester = numberOfDevelopingQuestionsPerTester;
  }
}
