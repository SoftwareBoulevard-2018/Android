import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstantProject } from '../../../models/instantProject';
import { HttpService } from '../../../app/http.service';

import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'updateInstantProject',
  templateUrl: 'updateInstantProject.html',
})
export class UpdateInstantProjectPage {
  instant:InstantProject;
  submitted = false;
  instantProject = new InstantProject();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService
  ) {this.instantProject = this.navParams.data.c; }

  goToProjectlist(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      return this.httpService.updateInstantProject(this.instantProject).subscribe(() => {
        this.navCtrl.pop();

      });

    }

  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad InstanteditorPage');
    }

  }
