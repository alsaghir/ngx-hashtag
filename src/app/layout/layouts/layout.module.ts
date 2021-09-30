import {NgModule} from '@angular/core';

import {SharedModule} from 'app/shared/shared.module';
import {LayoutComponent} from "./layout.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent
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
