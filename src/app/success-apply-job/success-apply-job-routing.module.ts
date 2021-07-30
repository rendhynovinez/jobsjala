import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessApplyJobPage } from './success-apply-job.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessApplyJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessApplyJobPageRoutingModule {}
