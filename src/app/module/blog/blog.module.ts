import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {BlogHeaderModule} from "../../misc/components/blog-header/blog-header.module";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

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
    CommonModule,
    BlogHeaderModule
  ]
})
export class BlogModule {}
