export class Company {

  constructor(public id?:string, public name?: string, public image?: string,
  public capacityK?: number, public companyResource?:number,
  public numberOfCorrectDevelopingAttempsByAnalyst?:number,
  public numberOfCorrectDevelopingAttempsByDeveloper?:number,
  public numberOfCorrectDevelopingAttempsByTester?:number,
) {}
}
