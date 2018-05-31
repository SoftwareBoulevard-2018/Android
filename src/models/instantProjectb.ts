export class InstantProjectb {
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
