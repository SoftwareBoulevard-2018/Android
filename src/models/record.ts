export class Record {
    _id: string;
    startDate: Date;
    finishDate: Date;
    company: string;
    project: string;
  
  
    constructor(_id?: string, startDate?: Date, finishDate?: Date, company?: string, project?: string) {
      this._id = _id;
      this.startDate = startDate;
      this.finishDate = finishDate;
      this.company = company;
      this.project = project;
    }
  }