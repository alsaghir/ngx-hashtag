import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {LandingComponent} from "./landing.component";

export const routes: Route[] = [
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LandingModule {}
