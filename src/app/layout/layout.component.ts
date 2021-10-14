import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-layout',
  template: `
    <app-centered>
      <router-outlet></router-outlet>
    </app-centered>
  `
})
export class LayoutComponent implements OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor() {}

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleTheme(): void {
    console.log('toggled !');
  }
}
