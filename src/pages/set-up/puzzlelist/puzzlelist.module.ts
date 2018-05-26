import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PuzzlelistPage } from './puzzlelist';

@NgModule({
  declarations: [
    PuzzlelistPage,
  ],
  imports: [
    IonicPageModule.forChild(PuzzlelistPage),
  ],
})
export class PuzzlelistPageModule {}
