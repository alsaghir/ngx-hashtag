import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {BlogHeaderModule} from "../../misc/components/blog-header/blog-header.module";

export const routes: Route[] = [
  {
    path: '',
    component: BlogComponent
  }
];

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BlogHeaderModule
  ]
})
export class BlogModule {}
