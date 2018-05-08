import { Component } from '@angular/core';

import {
  NavController
} from 'ionic-angular';
/**
 * shows a list with the subset of reports
 * based on the received parameters.
 */
@Component({
  selector: 'reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {

  constructor(
    public navCtrl: NavController,
  ) {}

}
