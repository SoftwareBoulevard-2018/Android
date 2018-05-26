import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewpuzzlePage } from './newpuzzle';

@NgModule({
  declarations: [
    NewpuzzlePage,
  ],
  imports: [
    IonicPageModule.forChild(NewpuzzlePage),
  ],
})
export class NewpuzzlePageModule {}
