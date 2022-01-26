import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessBiodataPageRoutingModule } from './success-biodata-routing.module';

import { SuccessBiodataPage } from './success-biodata.page';

import { InputModule } from '../input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    SuccessBiodataPageRoutingModule
  ],
  declarations: [SuccessBiodataPage]
})
export class SuccessBiodataPageModule {}
