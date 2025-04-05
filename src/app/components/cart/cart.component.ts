import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {AppState} from '../../../states/app.state';
import {selectCartProducts} from '../../../states/cart/cart.selector';
import {AsyncPipe, JsonPipe} from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems$;
  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.select(selectCartProducts);
  }
}
