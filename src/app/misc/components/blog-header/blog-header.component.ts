import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html'
})
export class BlogHeaderComponent implements OnInit {
  @Input() backgroundImage!: string;
  @Input() heading!: string;
  @Input() subHeading!: string;
  @Input() meta!: string;
  @Input() siteHeading = false;

  constructor() {}

  ngOnInit() {}
}
