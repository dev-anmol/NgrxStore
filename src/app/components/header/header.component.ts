import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../states/app.state';
import {selectCount} from '../../../states/counter/counter.selector';
import {AsyncPipe} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    AsyncPipe, RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  count$!: Observable<number>;
  constructor(private store: Store<AppState>, private router: Router) {
    this.count$ = this.store.select(selectCount)
  }

  navigate(route:any){
    this.router.navigate([route])
  }
}
