export class Estimation {
  attemptNumber: number;
  projectManagerUsername: string;
  projectName: string;
  estimatedTime: number;
  estimatedCost: number;
  state: boolean;

  constructor(attemptNumber: number, projectManagerUsername: string, projectName: string, estimatedTime: number, estimatedCost: number, state: boolean) {
    this.attemptNumber = attemptNumber;
    this.projectManagerUsername = projectManagerUsername;
    this.projectName = projectName;
    this.estimatedTime = estimatedTime;
    this.estimatedCost = estimatedCost;
    this.state = state;
  }
}
//This is the estimation class, its used to store the estimation tries at cost and time of project