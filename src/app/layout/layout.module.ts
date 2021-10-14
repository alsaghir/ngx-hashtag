import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {LayoutComponent} from "./layout.component";
import {CenteredComponent} from "./layouts/centered/centered.component";

@NgModule({
  declarations: [
    LayoutComponent,
    CenteredComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
