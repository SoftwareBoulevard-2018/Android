import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HireUserPage } from './hire-user';

@NgModule({
  declarations: [
    HireUserPage,
  ],
  imports: [
    IonicPageModule.forChild(HireUserPage),
  ],
})
export class HireUserPageModule {}
