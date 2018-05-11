import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateResourcesPage } from './generate-resources';

@NgModule({
  declarations: [
    GenerateResourcesPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerateResourcesPage),
  ],
})
export class GenerateResourcesPageModule {}
