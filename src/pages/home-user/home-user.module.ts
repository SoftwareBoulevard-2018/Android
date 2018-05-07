import { NgModule } from '@angular/core';
import { IonicPageModule, AlertController } from 'ionic-angular';
import { HomeUserPage } from './home-user';

@NgModule({
  declarations: [
    HomeUserPage,
    AlertController
  ],
  imports: [
    IonicPageModule.forChild(HomeUserPage),
  ],
})
export class HomeUserPageModule {}
