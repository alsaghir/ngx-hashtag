import {NgModule} from '@angular/core';
import {BlogHeaderComponent} from "./blog-header.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    BlogHeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BlogHeaderComponent
  ]
})
export class BlogHeaderModule {}
