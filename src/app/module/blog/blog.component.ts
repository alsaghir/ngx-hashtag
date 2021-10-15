import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {BEURL} from "../../core/const";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit, OnDestroy {

  theme: 'dark' | 'default' = 'default';
  private destroy$: Subject<void> = new Subject<void>();
  rightPosts : null | {title: string, description: string}[] = null;
  leftPosts : null | {title: string, description: string}[] = null;
  featuredPost : null | {title: string, description: string} = null;

  constructor(@Inject(DOCUMENT) private document: Document,
              private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<{_embedded: {posts : [{title: string, description: string}]}}>(BEURL + '/posts')
      .subscribe(posts => {
        const piece = posts._embedded.posts.slice(1).length/2;
        this.leftPosts = posts._embedded.posts.slice(1, piece+1);
        this.rightPosts = posts._embedded.posts.slice(piece+1);
        this.featuredPost = posts._embedded.posts[0];
    });
  }

  toggleTheme() {
    if (this.theme === 'default') {
      this.theme = 'dark';
    } else {
      this.theme = 'default';
    }
    // this.loadStyle(`${this.theme}.css`);
    this.setStyle('theme', `${this.theme}.css`);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById('client-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.className = `style-manager-${this.theme}`;
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }

  setStyle(key: string, href: string) {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

  removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      this.document.head.removeChild(existingLinkElement);
    }
  }

  private getLinkElementForKey(key: string): HTMLLinkElement {
    return this.getExistingLinkElementByKey(key) ?? this.createLinkElementWithKey(key);
  }

  private getExistingLinkElementByKey(key: string): HTMLLinkElement | null {
    return this.document.head.querySelector(`link[rel="stylesheet"].${BlogComponent.getClassNameForKey(key)}`);
  }

  private createLinkElementWithKey(key: string): HTMLLinkElement {
    const linkEl = this.document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(BlogComponent.getClassNameForKey(key));
    this.document.head.appendChild(linkEl);
    return linkEl;
  }

  private static getClassNameForKey(key: string): string {
    return `style-manager-${key}`;
  }
}
