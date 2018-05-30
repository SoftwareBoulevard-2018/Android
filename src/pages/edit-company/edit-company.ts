import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, LoadingController, ToastController,NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Company } from '../../models/company';
import {HttpService} from '../../app/http.service';

/**
 * shows and validates a form used to update a company received in param c
 */
@Component({
  selector: 'edit-company',
  templateUrl: 'edit-company.html'
})
export class EditCompanyPage {
  company: Company;
  submitted = false;
  lacking_project_manager = true;
  project_managers;
  project_manager;
  changedImage=false;
  imageURI:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    this.company = this.navParams.data.c;
    this.getCurrentProjectManager(this.company.id);
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.changedImage = true;
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

    if (form.valid) {
      if(this.changedImage){
        this.uploadImage().then(() => {
          this.httpService.updateCompany(this.company, this.company.id).subscribe(() => {
            if(this.project_manager!==undefined&&this.project_manager!==null&&this.project_manager!==''){
              return this.httpService.updateUser({ companyId: this.company.id }, this.project_manager).subscribe(() => {
                this.navCtrl.pop();          
              });
            }else{
              this.navCtrl.pop();
            }
          });
        })
      }else{
        this.httpService.updateCompany(this.company, this.company.id).subscribe(() => {
          if(this.project_manager!==undefined&&this.project_manager!==null&&this.project_manager!==''){
            return this.httpService.updateUser({ companyId: this.company.id }, this.project_manager).subscribe(() => {
              this.navCtrl.pop();          
            });
          }else{
            this.navCtrl.pop();
          }
          
        });
      }
      
      
    }
  }

  getCurrentProjectManager(companyId) {
    return this.httpService.getUserByRoleCompany('Project Manager', companyId).subscribe( data => {
      console.log(data[0])
        if (data[0] === undefined) {
          this.lacking_project_manager = true;
          this.getUserByRoleCompany('Project Manager', null);
        } else {
          this.lacking_project_manager = false;
        }
      }
    );
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
