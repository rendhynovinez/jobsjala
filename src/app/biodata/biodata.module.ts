import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiodataPageRoutingModule } from './biodata-routing.module';

import { BiodataPage } from './biodata.page';
import { InputModule } from '../input/input.module';
import { InputCvModule } from '../input-cv/input-cv.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    InputModule,
    InputCvModule,
    BiodataPageRoutingModule
  ],
  declarations: [BiodataPage]
})
export class BiodataPageModule {}
