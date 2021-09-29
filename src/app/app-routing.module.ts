import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layouts/layout.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('./module/landing/landing.module').then(m => m.LandingModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
