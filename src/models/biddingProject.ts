import { InstantProject } from './instantProject';

export class BiddingProject extends InstantProject{
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
    super(id, name, numberOfDevelopingQuestionsPerTester, numberOfDevelopingQuestionsPerAnalyst, numberOfDevelopingQuestionsPerDeveloper, rewarded_K,);
    this.time = time;
    this.cost = cost;
    this.required_K = required_K;
    this.required_analyst_level = required_analyst_level;
    this.required_developer_level = required_developer_level;
    this.required_tester_level = required_tester_level;
  }
}

/*
export class BiddingProject extends InstantProject{
  time: number;
  cost: number;
  required_K: number;
  required_analyst_level: number;
  required_developer_level: number;
  required_tester_level: number;
  constructor(id: number, name: string, rewarded_K: number, numberOfDevelopingQuestionsPerTester:number,
              numberOfDevelopingQuestionsPerAnalyst:number, numberOfDevelopingQuestionsPerDeveloper:number, time: number, cost: number, required_K: number,
              required_analyst_level: number, required_developer_level: number, required_tester_level: number) {
    super(id, name, rewarded_K, numberOfDevelopingQuestionsPerTester, numberOfDevelopingQuestionsPerAnalyst, numberOfDevelopingQuestionsPerDeveloper);
    this.time = time;
    this.cost = cost;
    this.required_K = required_K;
    this.required_analyst_level = required_analyst_level;
    this.required_developer_level = required_developer_level;
    this.required_tester_level = required_tester_level;
  }
}*/
