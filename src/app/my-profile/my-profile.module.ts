import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProfilePageRoutingModule } from './my-profile-routing.module';

import { MyProfilePage } from './my-profile.page';
import { InputModule } from '../input/input.module';
import { InputCvModule } from '../input-cv/input-cv.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    InputCvModule,
    MyProfilePageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
