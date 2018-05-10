import {User} from "./user";

export class Company {
  resources: Number;

  constructor(public name?: string, public project_manager?: User, public image?: string,
    public active_project?: number, public capacity_k?: number, public team_members?: User[], public current_project_name?: string) {
      this.resources = 0;
  }
}
