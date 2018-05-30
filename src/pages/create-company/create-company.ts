import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Company } from '../../models/company';
import {HttpService} from '../../app/http.service';
/**
 * shows and validates a form used to create a new company
 */
@Component({
  selector: 'create-company',
  templateUrl: 'create-company.html'
})
export class CreateCompanyPage {
  company = new Company();
  project_managers;
  project_manager;
  submitted = false;
  
  imageURI:any;

  constructor(
    public navCtrl: NavController,
    public httpService: HttpService,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {}

  ionViewWillEnter(){
    this.getUserByRoleCompany('Project Manager', null);
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  uploadImage() {
    let loader = this.loadingCtrl.create({
      content: "Uploading image..."
    });
    loader.present();
  
    return this.httpService.uploadCompanyImage(this.imageURI)
      .then((data) => {
        this.company.image = data.response;
      console.log(data+" Uploaded Successfully");
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if(form.valid){
      this.uploadImage().then(() => {
        this.httpService.createCompany(this.company).subscribe((company) => {
          return this.httpService.updateUser({ companyId: company.id }, this.project_manager).subscribe(() => {
            this.navCtrl.pop();          
          });
          
        });
      })
      
    }
    
  }

  getUserByRoleCompany(role, companyId) {
    return this.httpService.getUserByRoleCompany(role, companyId).subscribe( data => {
        console.log(data);
      if (Array.isArray(data)) {
        this.project_managers = data;
      } else {
        this.project_managers = [data];
      }
      console.log(this.project_managers);
    }, () => {
      this.project_managers = [];
      }
    );
}
}
