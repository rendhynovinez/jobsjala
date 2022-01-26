import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BiodataGuard } from './guards/biodata.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reggroup',
    loadChildren: () => import('./reggroup/reggroup.module').then( m => m.ReggroupPageModule)
  },
  {
    path: 'biodata',
    loadChildren: () => import('./biodata/biodata.module').then( m => m.BiodataPageModule),
    canActivate:[BiodataGuard]
  },
  {
    path: 'success-biodata',
    loadChildren: () => import('./success-biodata/success-biodata.module').then( m => m.SuccessBiodataPageModule),
    canActivate:[BiodataGuard]
  },
  {
    path: 'list-job',
    loadChildren: () => import('./list-job/list-job.module').then( m => m.ListJobPageModule)
    ,canActivate:[BiodataGuard]
  },
  {
    path: 'detail-job',
    loadChildren: () => import('./detail-job/detail-job.module').then( m => m.DetailJobPageModule)
    ,canActivate:[BiodataGuard]
  },
  {
    path: 'success-apply-job',
    loadChildren: () => import('./success-apply-job/success-apply-job.module').then( m => m.SuccessApplyJobPageModule)
    ,canActivate:[BiodataGuard]
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
    ,canActivate:[BiodataGuard]
  },
  {
    path: 'my-job',
    loadChildren: () => import('./my-job/my-job.module').then( m => m.MyJobPageModule)
    ,canActivate:[BiodataGuard]
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'reggroup',
    loadChildren: () => import('./reggroup/reggroup.module').then( m => m.ReggroupPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
