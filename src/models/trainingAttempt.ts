export class TrainingAttempt {

  constructor(public number?:number, public state?: string, public question?: string,
  public answer?: [string], public user?:string,
) {

  }
}
