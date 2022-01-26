import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessBiodataPage } from './success-biodata.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessBiodataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessBiodataPageRoutingModule {}
