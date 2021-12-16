import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReggroupPageRoutingModule } from './reggroup-routing.module';

import { ReggroupPage } from './reggroup.page';
import { InputModule } from '../input/input.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputModule,
    IonicModule,
    ReggroupPageRoutingModule
  ],
  declarations: [ReggroupPage]
})
export class ReggroupPageModule {}
