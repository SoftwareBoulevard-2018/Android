import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestlistPage } from './questlist';

@NgModule({
  declarations: [
    QuestlistPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestlistPage),
  ],
})
export class QuestlistPageModule {}
