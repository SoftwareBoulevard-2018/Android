import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { creationPuzzle } from '../../../models/creationPuzzle';
import { HttpService } from '../../../app/http.service';


@IonicPage()
@Component({
  selector: 'page-newpuzzle',
  templateUrl: 'newpuzzle.html',
})
export class NewpuzzlePage {

  puzzle = new creationPuzzle();
  imageURI;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
  }

  onSubmit(form: NgForm) {

    if(form.valid){
      this.uploadImage().then(() => {
        return this.httpService.createPuzzle(this.puzzle).subscribe(() => {
          this.navCtrl.pop();
        });
      })
      
    }
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
  
    return this.httpService.uploadPuzzleImage(this.imageURI)
      .then((data) => {
        this.puzzle.imagen = data.response;
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
  
}
