import { InstantProjectb } from './instantProjectb';
export class BiddingProjectb extends InstantProjectb{
    time: number;
    cost: number;
    required_K: number;
    required_analyst_level: number;
    required_developer_level: number;
    required_tester_level: number;
    constructor(id?: string, name?: string,
        numberOfDevelopingQuestionsPerAnalyst?:number,  numberOfDevelopingQuestionsPerTester?:number, 
        numberOfDevelopingQuestionsPerDeveloper?:number,  rewarded_K?: number, time?: number, cost?: number, required_K?: number,
                required_analyst_level?: number, required_developer_level?: number, required_tester_level?: number) {
      super(id, name,numberOfDevelopingQuestionsPerAnalyst, numberOfDevelopingQuestionsPerDeveloper, numberOfDevelopingQuestionsPerTester, rewarded_K);
      this.time = time;
      this.cost = cost;
      this.required_K = required_K;
      this.required_analyst_level = required_analyst_level;
      this.required_developer_level = required_developer_level;
      this.required_tester_level = required_tester_level;
    }
}
//This was the original class, its consistent with the database, it was created due to the fack that someone changed the model at the last minute