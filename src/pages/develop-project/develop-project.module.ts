import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevelopProjectPage } from './develop-project';

@NgModule({
  declarations: [
    DevelopProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(DevelopProjectPage),
  ],
})
export class DevelopProjectPageModule {}
