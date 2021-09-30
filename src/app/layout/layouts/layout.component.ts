import {Component, Inject, OnDestroy, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';


@Component({
  selector: 'layout',
  styleUrls: ['./layout.component.scss'],
  template: `
    <router-outlet></router-outlet>`
})
export class LayoutComponent implements OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private _document: any,
    private _renderer2: Renderer2,
    private _router: Router) {}

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleTheme(): void {
    console.log('toggled !');
  }
}
