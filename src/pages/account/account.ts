import { Component } from '@angular/core';

import { AlertController, NavController, NavParams, Platform } from 'ionic-angular';



/**
 * shows information about
 * an account received in param "u"
 */
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class ViewAccountPage {
  user: any;
  cards = [];
  view;
  colorScheme = {
    domain: ['#00585E', '#009494', '#454445', '#FF5729', '#00B27D', '#29FFBF','#5E2700','#AB4600','#911E0F']
  };

  constructor(
    public alertCtrl: AlertController, 
    public nav: NavController, 
    public platform: Platform,
    public navParams: NavParams
  ) {

    this.user = navParams.get("u");
    
    //calculate efficiency
    this.user.efficiency = 0;
    if (this.user.resourcesSpent) {
      this.user.efficiency = ((this.user.correctProjectQuestions + this.user.correctTrainingQuestions) / (this.user.resourcesSpent) * 100).toFixed(2);
    }

    //create cards with information if available
    if (this.user.competencyLevel) this.cards = [...this.cards, {name: "Competency level", value: this.user.competencyLevel}];
    if (this.user.efficiency) this.cards = [...this.cards, {name: "Efficiency", value: this.user.efficiency+"%"}];
    if (this.user.resourcesSpent) this.cards = [...this.cards, {name: "Resources Spent", value: this.user.resourcesSpent}];

    //finds the size of the cards
    platform.ready().then(() => {
      this.view = [platform.width(), 350];
    });
  }

}
