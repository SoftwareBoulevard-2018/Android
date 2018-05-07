import { TestDataProvider } from './../../providers/test-data/test-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the HomeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-user',
  templateUrl: 'home-user.html',
})

export class HomeUserPage {
  displayName: String; 
  private alertFactory;

  constructor(public navCtrl: NavController, public navParams: NavParams, public TestDataProvider: TestDataProvider, alertCtrl: AlertController) {
    this.getDisplayName();
    this.alertFactory = new alertFactory(alertCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeUserPage');
  }

  getDisplayName()
  {
    this.displayName = this.TestDataProvider.selectDisplayName(1);
  }

  selectNewProject()
  {
    alert("Select new project!");
    
  }

  generateResources()
  {
    alert("Generate Resources!");
  }
  
  recruitTeamMember()
  {
    this.alertFactory.showCheckboxRecruit();
  }

  viewReports()
  {
    alert("View reports!");
  }

}

class alertFactory{

  testCheckboxOpen: boolean;
  testCheckboxResult: any;

  constructor(private alertCtrl: AlertController) {

  }

  alert1(){
    alert("Select new project! from factory");
  }

  showCheckboxRecruit() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

}