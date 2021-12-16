import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReggroupPage } from './reggroup.page';

const routes: Routes = [
  {
    path: '',
    component: ReggroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReggroupPageRoutingModule {}
