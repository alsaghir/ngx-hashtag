import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

import {SharedModule} from 'app/shared/shared.module';
import {LayoutComponent} from "./layout.component";
import {CenteredComponent} from "./layouts/centered/centered.component";

@NgModule({
  declarations: [
    LayoutComponent,
    CenteredComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
