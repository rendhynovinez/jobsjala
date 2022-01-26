import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessApplyJobPageRoutingModule } from './success-apply-job-routing.module';

import { SuccessApplyJobPage } from './success-apply-job.page';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    SuccessApplyJobPageRoutingModule
  ],
  declarations: [SuccessApplyJobPage]
})
export class SuccessApplyJobPageModule {}
