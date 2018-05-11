import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimateCostTimePage } from './estimate-cost-time';

@NgModule({
  declarations: [
    EstimateCostTimePage,
  ],
  imports: [
    IonicPageModule.forChild(EstimateCostTimePage),
  ],
})
export class EstimateCostTimePageModule {}
