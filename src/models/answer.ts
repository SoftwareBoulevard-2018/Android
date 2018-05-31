export class Answer {
	description: string;
	veracity: boolean;
	constructor(description: string, veracity: boolean) {
		this.description = description;
		this.veracity = veracity;
	}
}
