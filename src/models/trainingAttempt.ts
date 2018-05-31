export class TrainingAttempt {
	number: number;
	state: string;
	question: string;
	answer: string[];
	user: string;

  constructor(number?:number, state?: string, question?: string, answer?: [string], user?:string) {
  	this.number = number;
  	this.state = state;
  	this.question = question;
  	this.answer = answer;
  	this.user = user;
  }
}
