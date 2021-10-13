import {NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {BlogComponent} from "./blog.component";

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
    RouterModule.forChild(routes)
  ]
})
export class BlogModule {}
