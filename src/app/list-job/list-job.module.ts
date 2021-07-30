import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListJobPageRoutingModule } from './list-job-routing.module';

import { ListJobPage } from './list-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListJobPageRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [ListJobPage]
})
export class ListJobPageModule {}
