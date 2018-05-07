import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the TestDataProvider provider.

  Provider created in order to provide test data while the database is not implemented

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestDataProvider {

  TEST_DISPLAY_NAMES: string[] = ["Pedro Pica Piedras", "Cantinflas Risas locas", "Clark Kent", "Jian Cheng"];
  TEST_ROLES: string[] = ["Poject Manager", "Tester", "Pogramer", "Who knows?"];

  constructor(public http: HttpClient) {
    console.log('Hello TestDataProvider Provider');
  }

  selectDisplayName(input: number): string {
    return(this.TEST_DISPLAY_NAMES[input]);
  }
}
