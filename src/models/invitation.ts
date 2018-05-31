export class Invitation{
	_id: string;
	user: string;
	company: string;
	state: string;
  constructor(_id?: string, user?: string, company?: string, state?: string,){
  			  this._id = _id;
              this.user=user;
              this.company=company;
              this.state=state;

}
}