import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectlistPage } from '../projectlist/projectlist';
import { InstantProject } from '../../../models/instantProject';
import { HttpService } from '../../../app/http.service';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-instanteditor',
  templateUrl: 'instanteditor.html',
})
export class InstanteditorPage {

  submitted = false;
  instantProject = new InstantProject();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) { }

  goToProjeclist(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      return this.httpService.createInstantProject(this.instantProject).subscribe(() => {
        this.navCtrl.push(ProjectlistPage);

      });

    }

  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad InstanteditorPage');
    }

  }