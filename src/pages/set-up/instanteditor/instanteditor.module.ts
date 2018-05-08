import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstanteditorPage } from './instanteditor';

@NgModule({
  declarations: [
    InstanteditorPage,
  ],
  imports: [
    IonicPageModule.forChild(InstanteditorPage),
  ],
})
export class InstanteditorPageModule {}
